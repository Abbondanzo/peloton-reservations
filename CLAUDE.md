# Peloton Reservations — Project Notes

## Stack
- **Frontend**: React + TypeScript + Vite + styled-components
- **State**: Redux Toolkit + RTK Query for Peloton API
- **Backend**: Firebase (auth, realtime database), Node.js
- **Monorepo**: pnpm workspaces — `frontend/`, `backend/`, `shared/`, `translations/`
- **Routing**: React Router DOM with hash-based routing
- **PWA**: vite-plugin-pwa, service worker for push notifications

## Theme
Theming is done via styled-components' `DefaultTheme`. The theme object and its type are defined in:
- [frontend/src/features/theme/constants/theme.ts](frontend/src/features/theme/constants/theme.ts) — theme values
- [frontend/src/features/theme/types/styled.d.ts](frontend/src/features/theme/types/styled.d.ts) — `DefaultTheme` interface

Token names: `colors.accent`, `colors.main`, `colors.secondary`, `colors.mainSurface`, `colors.secondarySurface`, `borderRadius`, `borderColor`, `widths.mobile`, `widths.tablet`.

Dark mode is a near-term goal — always use theme tokens instead of hard-coded values. Media helpers: `mediaMobile` and `mediaTablet` from `theme/constants/queries.ts`. Shared style helpers: `border`, `hover`, `focus` from `theme/constants/styles.ts`.

## Key Data Models
Types are defined in `shared/src/alerts.ts` and `frontend/src/features/`. Look them up there rather than relying on inline definitions here. Key types to be aware of:
- `Alert`, `TimeRange`, `BookableStatus`, `AlertPreferences` — see [shared/src/alerts.ts](shared/src/alerts.ts)
- `RegisteredDevice` — see [frontend/src/features/messaging/types/RegisteredDevice.ts](frontend/src/features/messaging/types/RegisteredDevice.ts)
- `AsyncData<T>` — see [frontend/src/features/store/types/AsyncData.ts](frontend/src/features/store/types/AsyncData.ts)
- `Optional<T>` = `T | null` — global type alias, see [frontend/src/features/types/Optional.d.ts](frontend/src/features/types/Optional.d.ts)
- Studios are keyed by ID — `"7248695"` (New York), `"7248663"` (London) — see [shared/src/studios.ts](shared/src/studios.ts)

## Firebase DB Paths
- `alerts/${userId}/${alertId}` — alert data
- `alertPreferences/${userId}` — notification preferences
- `messagingTokens/${userId}/${token}` — device registrations

## Architecture Patterns
- Context + Provider pattern for Firebase realtime data (AlertsProvider, AlertPreferencesProvider, RegisteredDevicesProvider)
- RTK Query for Peloton API calls: `useGetClassesQuery`, `useGetDisciplinesQuery`, `useGetInstructorsQuery`
- Redux slices for local UI state (filters, session, studioSelector)
- Studio ID stored in Redux + localStorage via `studioStorage.ts`

## Routes
- `/class-list` — main class listing
- `/alerts` — alerts list, preferences, devices
- `/alerts/edit` — alert editor (receives alert via `location.state`)
- `/sign-in` — authentication
- `/about` — about page

## Alert Editor (4-step wizard)
- Files: `editor/AlertEditor.tsx`, `StepIndicator.tsx`, `OptionCard.tsx`, `CheckOption.tsx`, `StepBasics.tsx`, `StepFilters.tsx`, `StepSchedule.tsx`, `StepReview.tsx`
- Card wrapper removed from `AlertsEditorRoot.tsx`, card styling moved into editor's `Wrapper`
- Studio change resets instructor/discipline filters via `useRef` tracking

## Alerts List Page (sectioned layout)
- `AlertsRoot.tsx` — unified Section components instead of loose Cards
- `AsyncAlertsList.tsx` — header with count + "+ New alert" button, empty state CTA
- `AlertsListItem.tsx` — studio name title, status badge with tooltips, day dots, styled action buttons
- `RegisteredDevicesEditor.tsx` — friendly device names via `parseUserAgent.ts`, device icons, "This device" badge
- `AlertPreferencesEditor.tsx` — inline form with save feedback

## Accessibility
- Semantic buttons (`ResetButton`, `CloseButton`), keyboard handlers (`ListItem`), dialog roles (`Popover`, `MobileSidebar`)
- `useId()` in `TextInput`, `aria-describedby`, `aria-expanded`/`aria-haspopup` on popovers
- `React.memo` on `ClassListItem`, `AlertsListItem`

## Git & PR Conventions
Both commit messages and PR titles must use the same semantic prefix format: `[feat]`, `[fix]`, `[chore]`, `[refactor]`, `[docs]`, `[test]`, `[style]`

- Commit example: `[fix] Fix navbar overlapping sticky alert simulation day headers`
- PR title example: `[fix] Fix navbar overlapping sticky alert simulation day headers`

When running `gh pr create`, always include the prefix in the `--title` argument, e.g. `--title "[fix] Fix PWA pull-to-refresh spinner getting stuck"`.

## Gotchas
- Vite `preserveSymlinks: true` + pnpm causes duplicate React — fixed with `resolve.dedupe: ["react", "react-dom"]` in vite.config.ts
- DisciplineIcon color matching: exact match first, then `.includes()` fallback (because "Outdoor Run" is substring of "Outdoor Run/Walk")
