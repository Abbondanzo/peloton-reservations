import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
import { editAlert } from "../../firebase/editAlert";
import { isNotEmpty } from "../../../utils/optional";
import {
  useGetInstructorsQuery,
  useGetDisciplinesQuery,
} from "../../../class-list/services/pelotonApi";
import { generateAlertTitle } from "../../operators/generateAlertTitle";
import { Toggle } from "../atoms/Toggle";

const Wrapper = styled.li<{ $disabled: boolean }>`
  ${border}
  padding: 16px;
  transition: box-shadow 0.15s;
  opacity: ${(props) => (props.$disabled ? 0.55 : 1)};

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


const OverflowContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const OverflowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};
  transition: all 0.15s;
  padding: 0;

  &:hover {
    border-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.accent};
  }
`;

const OverflowMenuDropdown = styled.ul<{ $top: number; $right: number }>`
  position: fixed;
  top: ${(props) => props.$top}px;
  right: ${(props) => props.$right}px;
  background: ${(props) => props.theme.colors.mainSurface};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 4px 0;
  margin: 0;
  list-style: none;
  min-width: 130px;
  z-index: 1000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const OverflowMenuItem = styled.button`
  display: block;
  width: 100%;
  padding: 8px 14px;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 13px;
  text-align: left;
  color: ${(props) => props.theme.colors.main};
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.1s;

  &:hover {
    background: ${(props) => props.theme.colors.secondarySurface};
  }
`;

const DeleteMenuItem = styled(OverflowMenuItem)`
  color: ${(props) => props.theme.colors.error};
`;

const MenuDivider = styled.li`
  height: 1px;
  background: ${(props) => props.theme.borderColor};
  margin: 4px 0;
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
  onDuplicate: (alert: Alert) => void;
  onEdit: (alert: Alert) => void;
}

export const AlertsListItem = memo(({ alert, onDuplicate, onEdit }: Props) => {
  const navigate = useNavigate();
  const userId = useAppSelector(selectUserId);
  const isDisabled = !!alert.disabled;

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuCoords, setMenuCoords] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleToggleDisabled = useCallback(() => {
    if (!userId) return;
    editAlert(userId, { ...alert, disabled: !isDisabled });
  }, [userId, alert, isDisabled]);

  useLayoutEffect(() => {
    if (!menuOpen || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMenuCoords({
      top: rect.bottom + 4,
      right: window.innerWidth - rect.right,
    });
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Node)) return setMenuOpen(false);
      if (
        !buttonRef.current?.contains(e.target) &&
        !dropdownRef.current?.contains(e.target)
      )
        setMenuOpen(false);
    };
    const timeoutId = setTimeout(() => {
      document.addEventListener("keydown", handleKey);
      document.addEventListener("click", handleClick, true);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("click", handleClick, true);
    };
  }, [menuOpen]);
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

  const instructorNameById = useMemo(
    () => new Map(allInstructors?.map((i) => [i.id, i.name])),
    [allInstructors]
  );

  const disciplineNameById = useMemo(
    () => new Map(allDisciplines?.map((d) => [d.id, d.name])),
    [allDisciplines]
  );

  const alertTitle = useMemo(() => {
    if (alert.name) return alert.name;

    const instructorNames =
      isNotEmpty(alert.instructors) && allInstructors
        ? alert.instructors
            .map((id) => instructorNameById.get(id))
            .filter((n): n is string => Boolean(n))
        : null;

    const disciplineNames =
      isNotEmpty(alert.disciplines) && allDisciplines
        ? alert.disciplines
            .map((id) => disciplineNameById.get(id))
            .filter((n): n is string => Boolean(n))
        : null;

    return generateAlertTitle(disciplineNames, instructorNames);
  }, [
    alert.name,
    alert.instructors,
    alert.disciplines,
    allInstructors,
    allDisciplines,
    instructorNameById,
    disciplineNameById,
  ]);

  const studioLabel =
    STUDIOS[alert.studioId]?.location || alert.studioId || "No studio";

  const statusInfo = formatStatus(alert.maxStatus);

  return (
    <Wrapper $disabled={isDisabled}>
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
          <Toggle
            id={`toggle-${alert.id}`}
            checked={!isDisabled}
            onChange={handleToggleDisabled}
            aria-label={isDisabled ? "Enable alert" : "Disable alert"}
          />
          <OverflowContainer>
            <OverflowButton
              ref={buttonRef}
              type="button"
              aria-label="More options"
              aria-expanded={menuOpen}
              aria-haspopup="menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="3" r="1.5" />
                <circle cx="8" cy="8" r="1.5" />
                <circle cx="8" cy="13" r="1.5" />
              </svg>
            </OverflowButton>
            {menuOpen &&
              createPortal(
                <OverflowMenuDropdown
                  ref={dropdownRef}
                  role="menu"
                  $top={menuCoords.top}
                  $right={menuCoords.right}
                >
                  <li>
                    <OverflowMenuItem
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        navigate(alertsSimulationPath(alert.id));
                      }}
                    >
                      Test
                    </OverflowMenuItem>
                  </li>
                  <li>
                    <OverflowMenuItem
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        onEdit(alert);
                      }}
                    >
                      Edit
                    </OverflowMenuItem>
                  </li>
                  <li>
                    <OverflowMenuItem
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        onDuplicate(alert);
                      }}
                    >
                      Duplicate
                    </OverflowMenuItem>
                  </li>
                  <MenuDivider />
                  <li>
                    <DeleteMenuItem
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setMenuOpen(false);
                        userId && deleteAlert(userId, alert.id);
                      }}
                    >
                      Delete
                    </DeleteMenuItem>
                  </li>
                </OverflowMenuDropdown>,
                document.body
              )}
          </OverflowContainer>
        </Actions>
      </TopRow>
    </Wrapper>
  );
});
