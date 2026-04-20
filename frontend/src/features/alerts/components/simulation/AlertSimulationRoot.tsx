import { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { classifySnapshotMatch, STUDIOS } from "shared";
import styled from "styled-components";
import { mediaMobile } from "../../../theme/constants/queries";
import { border } from "../../../theme/constants/styles";
import { AlertsContext } from "../../context/AlertsContext";
import { useClassHistory } from "../../hooks/useClassHistory";
import { SimulationDaySection, groupByDay } from "./SimulationDaySection";
import { SimulationSummary } from "./SimulationSummary";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${border}
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.mainSurface};
`;

const Header = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  ${mediaMobile`
    padding: 16px;
  `}
`;

const BackButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: 13px;
  color: ${(props) => props.theme.colors.accent};
  cursor: pointer;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.main};
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Body = styled.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${mediaMobile`
    padding: 12px 16px 16px;
  `}
`;

const StatusText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`;

export const AlertSimulationRoot = () => {
  const { alertId } = useParams<{ alertId: string }>();
  const navigate = useNavigate();
  const alertsState = useContext(AlertsContext);

  const alert = useMemo(() => {
    if (alertsState.state !== "fulfilled") return null;
    return alertsState.data.find((a) => a.id === alertId) ?? null;
  }, [alertsState, alertId]);

  const historyState = useClassHistory(alert?.studioId ?? "");
  const timezone = alert ? (STUDIOS[alert.studioId]?.timezone ?? "UTC") : "UTC";

  const days = useMemo(() => {
    if (!alert || historyState.state !== "fulfilled") return [];
    return groupByDay(historyState.data, timezone);
  }, [alert, historyState, timezone]);

  const { matchCount, nearMissCount } = useMemo(() => {
    if (!alert || historyState.state !== "fulfilled")
      return { matchCount: 0, nearMissCount: 0 };
    let matches = 0;
    let nearMisses = 0;
    for (const entry of historyState.data) {
      const result = classifySnapshotMatch(entry, alert);
      if (result.type === "match") matches++;
      else if (result.type === "near-miss") nearMisses++;
    }
    return { matchCount: matches, nearMissCount: nearMisses };
  }, [alert, historyState]);

  const isLoading =
    alertsState.state === "loading" ||
    alertsState.state === "idle" ||
    historyState.state === "loading";

  const alertName = alert?.name ?? "Alert";

  return (
    <Page>
      <Header>
        <BackButton type="button" onClick={() => navigate(-1)}>
          ← Alerts
        </BackButton>
        <Title>{alertName} — Past 7 Days</Title>
        <Subtitle>
          {alert
            ? `${STUDIOS[alert.studioId]?.location ?? alert.studioId}`
            : ""}
        </Subtitle>
      </Header>
      <Body>
        {isLoading && <StatusText>Loading…</StatusText>}
        {!isLoading && !alert && <StatusText>Alert not found.</StatusText>}
        {!isLoading && alert && historyState.state === "fulfilled" && (
          <>
            <SimulationSummary
              matchCount={matchCount}
              nearMissCount={nearMissCount}
            />
            {days.length === 0 && (
              <StatusText>
                No class history yet. History builds up as the backend detects
                class changes.
              </StatusText>
            )}
            {days.map(({ label, dayIndex, snapshots }) => (
              <SimulationDaySection
                key={label}
                label={label}
                dayIndex={dayIndex}
                snapshots={snapshots}
                alert={alert}
                timezone={timezone}
              />
            ))}
          </>
        )}
        {!isLoading && historyState.state === "failed" && (
          <StatusText>Failed to load class history.</StatusText>
        )}
      </Body>
    </Page>
  );
};
