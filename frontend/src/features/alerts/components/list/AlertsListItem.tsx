import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { type Alert, STUDIOS } from "shared";
import styled from "styled-components";
import { alertsSimulationPath } from "../../../navigation/constants/paths";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppSelector } from "../../../store/hooks/useStore";
import { mediaMobile } from "../../../theme/constants/queries";
import { border } from "../../../theme/constants/styles";
import { DAY_NAMES } from "../../constants/days";
import { deleteAlert } from "../../firebase/deleteAlert";
import { isNotEmpty } from "../../../utils/optional";
import {
  useGetInstructorsQuery,
  useGetDisciplinesQuery,
} from "../../../class-list/services/pelotonApi";
import { generateAlertTitle } from "../../operators/generateAlertTitle";

const Wrapper = styled.li`
  ${border}
  padding: 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${mediaMobile`
    padding: 12px;
  `}
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${mediaMobile`
    flex-direction: column;
    gap: 8px;
  `}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const AlertTitle = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: ${(props) => props.theme.colors.main};
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${(props) =>
    props.$status === "free"
      ? props.theme.colors.status.free.bg
      : props.$status === "waitlist"
        ? props.theme.colors.status.waitlist.bg
        : `${props.theme.colors.error}20`};
  color: ${(props) =>
    props.$status === "free"
      ? props.theme.colors.status.free.text
      : props.$status === "waitlist"
        ? props.theme.colors.status.waitlist.text
        : props.theme.colors.error};
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${(props) => props.theme.colors.secondary};
`;

const DaysRow = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`;

const DayDot = styled.span<{ $active: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  background-color: ${(props) =>
    props.$active
      ? `${props.theme.colors.accent}12`
      : props.theme.colors.secondarySurface};
  color: ${(props) =>
    props.$active ? props.theme.colors.accent : props.theme.colors.secondary};
  border: 1px solid
    ${(props) =>
      props.$active ? `${props.theme.colors.accent}40` : "transparent"};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${mediaMobile`
    align-self: flex-end;
  `}
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  background: none;
  font-family: inherit;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.accent};
  }

  ${mediaMobile`
    padding: 6px 10px;
    font-size: 11px;
  `}
`;

const DeleteButton = styled(ActionButton)`
  &:hover {
    border-color: ${(props) => props.theme.colors.error};
    color: ${(props) => props.theme.colors.error};
  }
`;

const CreatedText = styled.span`
  font-size: 11px;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 4px;
`;

const STATUS_INFO: Record<string, { label: string; title: string }> = {
  free: {
    label: "Open spots",
    title: "Only alerts when a class has open spots available to book",
  },
  waitlist: {
    label: "Waitlist",
    title: "Alerts when a class has open spots or waitlist availability",
  },
  full: {
    label: "Any",
    title: "Alerts regardless of availability status",
  },
};

const formatStatus = (status: string) =>
  STATUS_INFO[status] || { label: status, title: "" };

interface Props {
  alert: Alert;
  onDuplicate: () => void;
  onEdit: () => void;
}

export const AlertsListItem = memo(({ alert, onDuplicate, onEdit }: Props) => {
  const navigate = useNavigate();
  const userId = useAppSelector(selectUserId);
  const { data: allInstructors } = useGetInstructorsQuery(alert.studioId);
  const { data: allDisciplines } = useGetDisciplinesQuery(alert.studioId);

  const formattedDate = useMemo(() => {
    const created = new Date(alert.created);
    const isThisYear = created.getFullYear() === new Date().getFullYear();
    const formatter = new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      ...(isThisYear ? {} : { year: "numeric" }),
    });
    return formatter.format(alert.created);
  }, [alert.created]);

  const alertTitle = useMemo(() => {
    if (alert.name) return alert.name;

    const instructorNames =
      isNotEmpty(alert.instructors) && allInstructors
        ? alert.instructors
            .map((id) => allInstructors.find((i) => i.id === id)?.name)
            .filter((n): n is string => Boolean(n))
        : null;

    const disciplineNames =
      isNotEmpty(alert.disciplines) && allDisciplines
        ? alert.disciplines
            .map((id) => allDisciplines.find((d) => d.id === id)?.name)
            .filter((n): n is string => Boolean(n))
        : null;

    return generateAlertTitle(disciplineNames, instructorNames);
  }, [
    alert.name,
    alert.instructors,
    alert.disciplines,
    allInstructors,
    allDisciplines,
  ]);

  const studioLabel =
    STUDIOS[alert.studioId]?.location || alert.studioId || "No studio";

  const statusInfo = formatStatus(alert.maxStatus);

  return (
    <Wrapper>
      <TopRow>
        <Info>
          <TitleRow>
            <AlertTitle>{alertTitle}</AlertTitle>
            <StatusBadge $status={alert.maxStatus} title={statusInfo.title}>
              {statusInfo.label}
            </StatusBadge>
          </TitleRow>

          <DetailRow>{studioLabel}</DetailRow>

          <DaysRow>
            {DAY_NAMES.map((day, i) => (
              <DayDot
                key={day}
                $active={!!alert.timeRanges[i]}
                title={
                  alert.timeRanges[i]
                    ? `${day}: monitoring enabled`
                    : `${day}: not monitored`
                }
              >
                {day.charAt(0)}
              </DayDot>
            ))}
          </DaysRow>

          <CreatedText>Created {formattedDate}</CreatedText>
        </Info>

        <Actions>
          <ActionButton
            type="button"
            onClick={() => navigate(alertsSimulationPath(alert.id))}
            aria-label="Test alert"
          >
            Test
          </ActionButton>
          <ActionButton type="button" onClick={onEdit} aria-label="Edit alert">
            Edit
          </ActionButton>
          <ActionButton
            type="button"
            onClick={onDuplicate}
            aria-label="Duplicate alert"
          >
            Duplicate
          </ActionButton>
          <DeleteButton
            type="button"
            onClick={() => userId && deleteAlert(userId, alert.id)}
            aria-label="Delete alert"
          >
            Delete
          </DeleteButton>
        </Actions>
      </TopRow>
    </Wrapper>
  );
});
