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
    gap: 12px;
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
// Chart shared primitives
// ---------------------------------------------------------------------------

// Coordinate space — X stretches to fill any container, Y is fixed.
const VB_W = 1000;
const VB_H = 140;
const TOP_PAD = 12;
const BOT_PAD = 4;
const PLOT_H = VB_H - TOP_PAD - BOT_PAD;

function xAt(i: number, n: number): number {
  return n <= 1 ? VB_W / 2 : (i / (n - 1)) * VB_W;
}

function yAt(value: number, maxValue: number): number {
  return TOP_PAD + PLOT_H * (1 - value / maxValue);
}

const GRID_FRACTIONS = [0.25, 0.5, 0.75];

const ChartOuter = styled.div`
  background: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 16px 16px 12px;
`;

const ChartSvg = styled.svg`
  display: block;
  width: 100%;
  height: 140px;
  /* currentColor is used by grid lines so they inherit the theme secondary color */
  color: ${(p) => p.theme.colors.secondary};
`;

const DayLabelsRow = styled.div`
  display: flex;
  margin-top: 6px;
`;

const DayLabelCell = styled.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: ${(p) => p.theme.colors.secondary};
  overflow: hidden;
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

interface SeriesSpec {
  value: number;
  color: string;
  label: string;
}

function ChartFooter({
  days,
  legend,
}: {
  days: DayMetrics[];
  legend: { color: string; label: string }[];
}) {
  return (
    <>
      <DayLabelsRow>
        {days.map((day) => (
          <DayLabelCell key={day.date}>{shortDate(day.date)}</DayLabelCell>
        ))}
      </DayLabelsRow>
      <Legend>
        {legend.map((item) => (
          <LegendItem key={item.label}>
            <LegendDot $color={item.color} />
            {item.label}
          </LegendItem>
        ))}
      </Legend>
    </>
  );
}

// ---------------------------------------------------------------------------
// Stacked area chart
// ---------------------------------------------------------------------------
// Layers are stacked bottom-to-top in the order provided. The area for each
// layer spans from the top of the previous layer to the top of this one,
// so there is no visual overlap and the total height = sum of all values.

function StackedAreaChart({
  days,
  layersForDay,
  legend,
}: {
  days: DayMetrics[];
  layersForDay: (day: DayMetrics) => SeriesSpec[];
  legend: { color: string; label: string }[];
}) {
  const n = days.length;

  // cumulative[dayIdx][layerIdx] = running sum up to (not including) that layer
  const cumulative = days.map((day) => {
    const layers = layersForDay(day);
    const sums = [0];
    for (const layer of layers) {
      sums.push(sums[sums.length - 1] + layer.value);
    }
    return sums;
  });

  const maxTotal = Math.max(...cumulative.map((s) => s[s.length - 1]), 1);
  const sampleLayers = layersForDay(days[0]);
  const layerCount = sampleLayers.length;

  return (
    <ChartOuter>
      <ChartSvg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {GRID_FRACTIONS.map((f) => {
          const y = (TOP_PAD + PLOT_H * (1 - f)).toFixed(1);
          return (
            <line
              key={f}
              x1={0}
              y1={y}
              x2={VB_W}
              y2={y}
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        {Array.from({ length: layerCount }, (_, li) => {
          const color = sampleLayers[li].color;
          // Top boundary (left → right), bottom boundary (right → left)
          const topPts = cumulative.map((s, i) => ({
            x: xAt(i, n),
            y: yAt(s[li + 1], maxTotal),
          }));
          const botPts = cumulative.map((s, i) => ({
            x: xAt(i, n),
            y: yAt(s[li], maxTotal),
          }));
          const d = [
            ...topPts.map(({ x, y }, i) =>
              `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`
            ),
            ...[...botPts]
              .reverse()
              .map(({ x, y }) => `L${x.toFixed(1)},${y.toFixed(1)}`),
            "Z",
          ].join(" ");
          return <path key={li} d={d} fill={color} fillOpacity={0.85} />;
        })}
      </ChartSvg>
      <ChartFooter days={days} legend={legend} />
    </ChartOuter>
  );
}

// ---------------------------------------------------------------------------
// Line chart
// ---------------------------------------------------------------------------
// Each series is drawn as a stroked path with a light filled area underneath.
// Used for independent metrics that shouldn't be stacked.

function LineChart({
  days,
  seriesForDay,
  legend,
}: {
  days: DayMetrics[];
  seriesForDay: (day: DayMetrics) => SeriesSpec[];
  legend: { color: string; label: string }[];
}) {
  const n = days.length;
  const allSeries = days.map(seriesForDay);
  const maxValue = Math.max(
    ...allSeries.flatMap((s) => s.map((v) => v.value)),
    1
  );
  const seriesCount = allSeries[0].length;
  const baseY = yAt(0, maxValue).toFixed(1);

  return (
    <ChartOuter>
      <ChartSvg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {GRID_FRACTIONS.map((f) => {
          const y = (TOP_PAD + PLOT_H * (1 - f)).toFixed(1);
          return (
            <line
              key={f}
              x1={0}
              y1={y}
              x2={VB_W}
              y2={y}
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        {Array.from({ length: seriesCount }, (_, si) => {
          const color = allSeries[0][si].color;
          const pts = allSeries.map((s, i) => ({
            x: xAt(i, n),
            y: yAt(s[si].value, maxValue),
          }));
          const linePts = pts
            .map(({ x, y }, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
            .join(" ");
          const fillD = [
            linePts,
            `L${xAt(n - 1, n).toFixed(1)},${baseY}`,
            `L${xAt(0, n).toFixed(1)},${baseY}`,
            "Z",
          ].join(" ");

          return (
            <g key={si}>
              <path d={fillD} fill={color} fillOpacity={0.12} />
              <path
                d={linePts}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          );
        })}
      </ChartSvg>
      <ChartFooter days={days} legend={legend} />
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
            Failed to load metrics: {metrics.error.message ?? "unknown error"}
          </StatusMessage>
        </Page>
      </NavbarProvider>
    );
  }

  const days = metrics.data;

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

  const studioIds = [...new Set(days.flatMap((d) => Object.keys(d.diffs)))];

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
          <LineChart
            days={days}
            seriesForDay={(day) => [
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
              Schedule changes — {STUDIOS[studioId]?.location ?? studioId} (14
              days)
            </SectionTitle>
            <StackedAreaChart
              days={days}
              layersForDay={(day) => {
                const s = day.diffs[studioId] ?? {
                  added: 0,
                  changed: 0,
                  removed: 0,
                };
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
