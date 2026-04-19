import type { ClassSnapshot, NearMissReason } from "shared";
import { classifySnapshotMatch } from "shared";
import type { Alert } from "shared";
import styled from "styled-components";
import { getLocalDate } from "../../../class-list/operators/getLocalDate";
import { MatchCard } from "./MatchCard";
import { NearMissCard } from "./NearMissCard";
import { SkippedRow } from "./SkippedRow";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DayHeader = styled.h3`
  position: sticky;
  top: 0;
  margin: 0;
  padding: 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.mainSurface};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  z-index: 1;
`;

interface Props {
  label: string;
  snapshots: ClassSnapshot[];
  alert: Alert;
  timezone?: string;
}

export const SimulationDaySection = ({
  label,
  snapshots,
  alert,
  timezone,
}: Props) => {
  const matches: ClassSnapshot[] = [];
  const nearMisses: { snapshot: ClassSnapshot; reason: NearMissReason }[] = [];
  const skipped: ClassSnapshot[] = [];

  for (const snapshot of snapshots) {
    const result = classifySnapshotMatch(snapshot, alert);
    if (result.type === "match") {
      matches.push(snapshot);
    } else if (result.type === "near-miss") {
      nearMisses.push({ snapshot, reason: result.reason });
    } else {
      skipped.push(snapshot);
    }
  }

  return (
    <Section>
      <DayHeader>{label}</DayHeader>
      {matches.map((s, i) => (
        <MatchCard key={i} snapshot={s} timezone={timezone} />
      ))}
      {nearMisses.map(({ snapshot, reason }, i) => (
        <NearMissCard key={i} snapshot={snapshot} reason={reason} timezone={timezone} />
      ))}
      {skipped.length > 0 && (
        <SkippedRow snapshots={skipped} timezone={timezone} />
      )}
    </Section>
  );
};

/** Groups snapshots by local calendar date label using studio timezone. */
export const groupByDay = (
  snapshots: ClassSnapshot[],
  timezone: string
): { label: string; snapshots: ClassSnapshot[] }[] => {
  const groups = new Map<string, ClassSnapshot[]>();
  for (const snap of snapshots) {
    const label = getLocalDate(snap.starts_at, timezone, true);
    const existing = groups.get(label);
    if (existing) {
      existing.push(snap);
    } else {
      groups.set(label, [snap]);
    }
  }
  return Array.from(groups.entries()).map(([label, snaps]) => ({
    label,
    snapshots: snaps,
  }));
};
