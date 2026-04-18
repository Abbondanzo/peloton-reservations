# Alert Simulation Feature — Implementation Plan

## Overview

When a user views their alerts list, a "Test" button on each `AlertsListItem` opens a simulation page (`/alerts/:alertId/test`) showing the past 7 days of classes evaluated against that alert's criteria. This gives users confidence that their alert is configured correctly before relying on it in production.

## Data availability finding

The live Peloton API (`schedule.studio.onepeloton.com/api/v2/events`) only retains ~3 days of past schedule data, and more importantly, `occupancy`/`waiting_count` reflect *current* state — not what they were when the class first appeared. This means status-based matching (free/waitlist) cannot be accurately simulated against the live API.

**Solution: store class snapshots in Firebase from the backend.** The backend already polls every 10 seconds and sees class status at the moment of each change. Writing snapshots at that point gives us accurate historical data including occupancy at time of detection.

---

## Firebase schema

```
classHistory/{studioId}/{classId}/{snapshotTimestampMs}
  → {
      starts_at: string,          // ISO timestamp with offset
      instructors: RawInstructor[],
      disciplineId: string,       // offering_type.category.id as string
      occupancy: number,
      maxOccupancy: number,
      waitingCount: number,
      status: BookableStatus,     // computed at snapshot time
      name: string | null,
    }
```

Firebase paths are defined in `shared/src/firebasePaths.ts`:
- `PATHS.classHistory(studioId)` → `classHistory/{studioId}`
- `PATHS.classSnapshot(studioId, classId)` → `classHistory/{studioId}/{classId}`

Retention: use Firebase security rules or a backend cleanup job to expire entries older than 7 days.

---

## Match tiers

| Tier | Meaning | Display |
|------|---------|---------|
| **match** | All criteria satisfied — alert would have fired | Prominent card, green accent |
| **near-miss** | Exactly one criterion fails | Dimmer card, amber accent + reason label |
| **skipped** | Two or more criteria fail | Collapsed into count row |

Near-miss reasons (from `shared/src/alertMatching.ts` `NearMissReason`):
- `"instructor"` — right discipline/time/status but wrong instructor
- `"time"` — right everything but outside the time window (e.g. Cody at 7am when window is 8am–8pm)
- `"discipline"` — wrong discipline
- `"status"` — class was full when alert requires free

---

## UI layout

```
┌────────────────────────────────────────────────────┐
│ ← Alerts   "Morning Cycling" — Past 7 Days         │
│            Cody Rigsby · Cycling · Free · M–F 8–8  │
├────────────────────────────────────────────────────┤
│  2 would have triggered · 4 near misses            │  ← summary strip
├────────────────────────────────────────────────────┤
│ Saturday Apr 12  ·  day not monitored              │
│  ↳ 6 classes  ▸                                    │  ← collapsed
├────────────────────────────────────────────────────┤
│ Friday Apr 11                                      │
│ ┌──────────────────────────────────────────────┐   │
│ │ ● Would have triggered                       │   │  green, prominent
│ │   7:00 AM  Cycling  ·  Cody Rigsby           │   │
│ │   Free  ·  8 spots available                 │   │
│ └──────────────────────────────────────────────┘   │
│ ┌──────────────────────────────────────────────┐   │
│ │ ◌ Near miss — outside your time range        │   │  amber, reduced
│ │   6:45 AM  Cycling  ·  Cody Rigsby           │   │
│ └──────────────────────────────────────────────┘   │
│  ↳ 5 more classes skipped  ▸                       │
├────────────────────────────────────────────────────┤
│ Thursday Apr 10                                    │
│  ↳ 7 classes skipped  ▸                           │
└────────────────────────────────────────────────────┘
```

- Day headers are sticky on scroll
- Collapsed "skipped" rows expand to show compact single-line class items
- On mobile: full-width, full-page route with same scroll layout
- Summary strip shows total match count + near-miss count across all 7 days

---

## Files to create / modify

### Backend

| File | Change |
|------|--------|
| `backend/src/alerter.ts` | In `handleAddition`, write a snapshot for each new class. In `handleChange`, write a snapshot only when `getBookableStatus` crosses a tier boundary (free↔waitlist↔full) — skip pure occupancy noise |
| `backend/src/alerter.ts` | Add cleanup: periodically remove snapshot entries older than 7 days |

#### Write strategy — status-change filtering

The backend polls every 10 seconds and sees ~1,800 class changes per day. Writing a snapshot on every change would bloat storage and inflate download size on the simulation page. Instead, write only on **meaningful transitions**:

1. **Class first appears** (`handleAddition`) — always write
2. **Bookable status changes** (`handleChange`) — write when `getBookableStatus(oldClass) !== getBookableStatus(newClass)`, i.e. free→waitlist, waitlist→full, full→waitlist, waitlist→free

Pure occupancy fluctuations within the same tier (e.g. 5 spots → 4 spots, both "free") are skipped entirely.

**Expected volume:** ~15–20 new classes/day per studio + ~2–5 status transitions per class lifetime = **50–150 writes/day** vs. 1,800 raw changes. This is a 10–35× reduction.

**Firebase tier impact:**
- Storage: ~50–150 records/day × 7 days × ~300 bytes ≈ **0.3 MB per studio** — negligible against the 1 GB Spark free tier
- Downloads per simulation page load: same ~0.3 MB — well within the 10 GB/month free download quota even with regular use

### Shared (already done)

| File | Status |
|------|--------|
| `shared/src/alertMatching.ts` | ✅ — `matchesAlert`, `classifyMatch`, `getChangeType`, `ChangeType`, `MatchDetail`, `NearMissReason` |
| `shared/src/classStatus.ts` | ✅ — `WAITLIST_MAX`, `isFree`, `isWaitlistFull`, `getBookableStatus` |
| `shared/src/firebasePaths.ts` | ✅ — `PATHS` with `classHistory` and `classSnapshot` |
| `shared/src/timeRanges.ts` | ✅ — `ALL_DAY_TIME_RANGE`, `isAllDay` etc. |
| `shared/src/optional.ts` | ✅ — `isEmpty`, `isNotEmpty` |

### Frontend — new files

| File | Purpose |
|------|---------|
| `frontend/src/features/alerts/components/simulation/AlertSimulationRoot.tsx` | Page container: reads alert from context by ID, fetches class history from Firebase, groups by day, renders |
| `frontend/src/features/alerts/components/simulation/SimulationDaySection.tsx` | One day's section with sticky header, match count summary, cards, collapsible skipped row |
| `frontend/src/features/alerts/components/simulation/MatchCard.tsx` | Prominent "would have triggered" card with green accent |
| `frontend/src/features/alerts/components/simulation/NearMissCard.tsx` | Amber-accented card showing class + reason label |
| `frontend/src/features/alerts/components/simulation/SkippedRow.tsx` | Collapsible "(X classes skipped)" row expanding to compact class list |
| `frontend/src/features/alerts/components/simulation/SimulationSummary.tsx` | Top strip: total matches + near-miss count |
| `frontend/src/features/alerts/hooks/useClassHistory.ts` | Firebase listener for `classHistory/{studioId}`, returns `AsyncData<ClassSnapshot[]>` |
| `frontend/src/features/alerts/types/ClassSnapshot.ts` | Frontend type for a stored class snapshot |

### Frontend — modified files

| File | Change |
|------|--------|
| `frontend/src/features/alerts/components/list/AlertsListItem.tsx` | Add "Test" icon button alongside Edit/Duplicate/Delete |
| Router config (wherever routes are defined) | Add `/alerts/:alertId/test` route |

---

## Data flow

```
Firebase classHistory/{studioId}
    ↓  useClassHistory(studioId)
AlertSimulationRoot
    ↓  classifyMatch(snapshot, alert)   ← shared/src/alertMatching.ts
    ↓  group by calendar day (studio timezone)
SimulationDaySection[]
    ├─ MatchCard[]          (type === "match")
    ├─ NearMissCard[]       (type === "near-miss")
    └─ SkippedRow           (type === "skipped", collapsible)
```

---

## Open questions

1. **Snapshot write frequency** — write on every poll that sees the class (updating the latest snapshot), or only on first appearance + status changes? Writing only on changes is cheaper and more meaningful for the simulation.
2. **Cleanup strategy** — periodic backend job vs. Firebase TTL rules. TTL rules require Firestore; Realtime Database uses `.sv: "timestamp"` indexing which doesn't auto-expire. A backend `setInterval` cleanup is simpler.
3. **Multiple snapshots per class** — should each status change create a new timestamped child, or overwrite the single entry? Multiple snapshots would show the full timeline of a class (added → became_free → full). Single entry only shows the most recent state. Multiple is richer but more storage.
