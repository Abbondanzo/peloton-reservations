import styled from "styled-components";
import { STUDIOS } from "shared";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { mediaMobile } from "../../theme/constants/queries";
import type { DayMetrics } from "../hooks/useMetrics";
import { useMetrics } from "../hooks/useMetrics";

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

const Page = styled.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${mediaMobile`
    padding: 20px 16px;
  `}
`;

const Heading = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.main};
  margin: 0 0 28px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${(p) => p.theme.colors.secondary};
  margin: 0 0 16px;
`;

const TotalsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${mediaMobile`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const TotalCard = styled.div`
  background: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 16px 20px;
`;

const TotalLabel = styled.div`
  font-size: 12px;
  color: ${(p) => p.theme.colors.secondary};
  margin-bottom: 4px;
`;

const TotalValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.main};
`;

const StatusMessage = styled.p`
  color: ${(p) => p.theme.colors.secondary};
  font-size: 14px;
`;

// ---------------------------------------------------------------------------
// Bar chart
// ---------------------------------------------------------------------------

const MAX_BAR_HEIGHT = 80; // px

const ChartOuter = styled.div`
  background: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 20px 16px 12px;
  overflow-x: auto;
`;

const ChartInner = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  min-width: max-content;
`;

const DayGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Bars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: ${MAX_BAR_HEIGHT + 16}px;
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const BarCount = styled.div<{ $color: string }>`
  font-size: 9px;
  font-weight: 600;
  line-height: 1;
  color: ${(p) => p.$color};
`;

const Bar = styled.div<{ $height: number; $color: string }>`
  width: 10px;
  height: ${(p) => p.$height}px;
  background-color: ${(p) => p.$color};
  border-radius: 2px 2px 0 0;
  min-height: 1px;
`;

const DayLabel = styled.div`
  font-size: 10px;
  color: ${(p) => p.theme.colors.secondary};
  white-space: nowrap;
`;

const Legend = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${(p) => p.theme.colors.secondary};
`;

const LegendDot = styled.div<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${(p) => p.$color};
  flex-shrink: 0;
`;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function shortDate(iso: string): string {
  const [, month, day] = iso.split("-");
  return `${parseInt(month)}/${parseInt(day)}`;
}

interface BarSpec {
  value: number;
  color: string;
  label: string;
}

function BarChart({
  days,
  barsForDay,
  legend,
}: {
  days: DayMetrics[];
  barsForDay: (day: DayMetrics) => BarSpec[];
  legend: { color: string; label: string }[];
}) {
  const allValues = days.flatMap((d) => barsForDay(d).map((b) => b.value));
  const maxValue = Math.max(...allValues, 1);

  return (
    <ChartOuter>
      <ChartInner>
        {days.map((day) => (
          <DayGroup key={day.date}>
            <Bars>
              {barsForDay(day).map((bar) => (
                <BarWrapper key={bar.label}>
                  {bar.value > 0 && (
                    <BarCount $color={bar.color}>{bar.value}</BarCount>
                  )}
                  <Bar
                    $height={Math.round((bar.value / maxValue) * MAX_BAR_HEIGHT)}
                    $color={bar.color}
                  />
                </BarWrapper>
              ))}
            </Bars>
            <DayLabel>{shortDate(day.date)}</DayLabel>
          </DayGroup>
        ))}
      </ChartInner>
      <Legend>
        {legend.map((item) => (
          <LegendItem key={item.label}>
            <LegendDot $color={item.color} />
            {item.label}
          </LegendItem>
        ))}
      </Legend>
    </ChartOuter>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const COLORS = {
  added: "#4ade80",
  changed: "#facc15",
  removed: "#f87171",
  sent: "#60a5fa",
  failed: "#f87171",
  usersReached: "#a78bfa",
};

export const StatsRoot = () => {
  const metrics = useMetrics(14);

  if (metrics.state === "idle" || metrics.state === "loading") {
    return (
      <NavbarProvider>
        <Page>
          <Heading>Stats</Heading>
          <StatusMessage>Loading…</StatusMessage>
        </Page>
      </NavbarProvider>
    );
  }

  if (metrics.state === "failed") {
    return (
      <NavbarProvider>
        <Page>
          <Heading>Stats</Heading>
          <StatusMessage>
            Failed to load metrics:{" "}
            {metrics.error.message ?? "unknown error"}
          </StatusMessage>
        </Page>
      </NavbarProvider>
    );
  }

  const days = metrics.data;

  // Aggregate totals across all days
  const totals = days.reduce(
    (acc, day) => {
      acc.sent += day.notifications.sent;
      acc.failed += day.notifications.failed;
      acc.usersReached += day.notifications.usersReached;
      for (const studio of Object.values(day.diffs)) {
        acc.added += studio.added;
        acc.changed += studio.changed;
        acc.removed += studio.removed;
      }
      return acc;
    },
    { sent: 0, failed: 0, usersReached: 0, added: 0, changed: 0, removed: 0 }
  );

  const studioIds = [
    ...new Set(days.flatMap((d) => Object.keys(d.diffs))),
  ];

  return (
    <NavbarProvider>
      <Page>
        <Heading>Stats</Heading>

        <TotalsRow>
          <TotalCard>
            <TotalLabel>Notifications sent (14d)</TotalLabel>
            <TotalValue>{totals.sent.toLocaleString()}</TotalValue>
          </TotalCard>
          <TotalCard>
            <TotalLabel>Users reached (14d)</TotalLabel>
            <TotalValue>{totals.usersReached.toLocaleString()}</TotalValue>
          </TotalCard>
          <TotalCard>
            <TotalLabel>Delivery failures (14d)</TotalLabel>
            <TotalValue>{totals.failed.toLocaleString()}</TotalValue>
          </TotalCard>
          <TotalCard>
            <TotalLabel>Classes added (14d)</TotalLabel>
            <TotalValue>{totals.added.toLocaleString()}</TotalValue>
          </TotalCard>
          <TotalCard>
            <TotalLabel>Classes changed (14d)</TotalLabel>
            <TotalValue>{totals.changed.toLocaleString()}</TotalValue>
          </TotalCard>
          <TotalCard>
            <TotalLabel>Classes removed (14d)</TotalLabel>
            <TotalValue>{totals.removed.toLocaleString()}</TotalValue>
          </TotalCard>
        </TotalsRow>

        <Section>
          <SectionTitle>Push notifications (14 days)</SectionTitle>
          <BarChart
            days={days}
            barsForDay={(day) => [
              { value: day.notifications.sent, color: COLORS.sent, label: "Sent" },
              { value: day.notifications.failed, color: COLORS.failed, label: "Failed" },
              { value: day.notifications.usersReached, color: COLORS.usersReached, label: "Users reached" },
            ]}
            legend={[
              { color: COLORS.sent, label: "Sent" },
              { color: COLORS.failed, label: "Failed" },
              { color: COLORS.usersReached, label: "Users reached" },
            ]}
          />
        </Section>

        {studioIds.map((studioId) => (
          <Section key={studioId}>
            <SectionTitle>
              Schedule changes — {STUDIOS[studioId]?.location ?? studioId} (14 days)
            </SectionTitle>
            <BarChart
              days={days}
              barsForDay={(day) => {
                const s = day.diffs[studioId] ?? { added: 0, changed: 0, removed: 0 };
                return [
                  { value: s.added, color: COLORS.added, label: "Added" },
                  { value: s.changed, color: COLORS.changed, label: "Changed" },
                  { value: s.removed, color: COLORS.removed, label: "Removed" },
                ];
              }}
              legend={[
                { color: COLORS.added, label: "Added" },
                { color: COLORS.changed, label: "Changed" },
                { color: COLORS.removed, label: "Removed" },
              ]}
            />
          </Section>
        ))}
      </Page>
    </NavbarProvider>
  );
};
