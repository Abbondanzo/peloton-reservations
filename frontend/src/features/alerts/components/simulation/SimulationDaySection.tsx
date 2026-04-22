import type { ClassSnapshot, NearMissReason } from "shared";
import { classifySnapshotMatch } from "shared";
import type { Alert } from "shared";
import styled from "styled-components";
import { NAV_HEIGHT } from "../../../navigation/constants/height";
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
  top: calc(${NAV_HEIGHT}px + env(safe-area-inset-top, 0px));
  margin: 0;
  padding: 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.mainSurface};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  z-index: 1;
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const NotMonitored = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.secondary};
  opacity: 0.6;
`;

interface Props {
  label: string;
  dayIndex: number;
  snapshots: ClassSnapshot[];
  alert: Alert;
  timezone: string;
}

export const SimulationDaySection = ({
  label,
  dayIndex,
  snapshots,
  alert,
  timezone,
}: Props) => {
  const monitored = !!alert.timeRanges[dayIndex];
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
      <DayHeader>
        {label}
        {!monitored && <NotMonitored>not monitored</NotMonitored>}
      </DayHeader>
      {matches.map((s, i) => (
        <MatchCard key={i} snapshot={s} timezone={timezone} />
      ))}
      {nearMisses.map(({ snapshot, reason }, i) => (
        <NearMissCard
          key={i}
          snapshot={snapshot}
          reason={reason}
          timezone={timezone}
        />
      ))}
      {skipped.length > 0 && (
        <SkippedRow snapshots={skipped} timezone={timezone} />
      )}
    </Section>
  );
};
