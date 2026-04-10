import * as Sentry from "@sentry/react";
import { memo, useMemo } from "react";
import styled, { css } from "styled-components";
import { useAppSelector } from "../../store/hooks/useStore";
import { mediaMobile } from "../../theme/constants/queries";
import { getLocalTime } from "../operators/getLocalTime";
import { selectStudio } from "../selectors/selectStudio";
import type { Class } from "../types/Class";
import { DisciplineIcon } from "./DisciplineIcon";
import { InstructorIcon } from "./InstructorIcon";

type BookStatus = "free" | "waitlist" | "full";

const STATUS_CONFIG: Record<
  BookStatus,
  {
    accentColor: string;
    buttonBg: string;
    buttonText: string;
    buttonBorder: string;
    label: string;
  }
> = {
  free: {
    accentColor: "#2e7d32",
    buttonBg: "#cb3449",
    buttonText: "#fff",
    buttonBorder: "#cb3449",
    label: "Book",
  },
  waitlist: {
    accentColor: "#e65100",
    buttonBg: "transparent",
    buttonText: "#e65100",
    buttonBorder: "#e65100",
    label: "Waitlist",
  },
  full: {
    accentColor: "#c4c4c4",
    buttonBg: "transparent",
    buttonText: "#aaa",
    buttonBorder: "#d1d1d1",
    label: "Full",
  },
};

interface StatusProps {
  $status: BookStatus;
  $interactive: boolean;
}

const ItemAnchor = styled.a<StatusProps>`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-left: 4px solid ${(p) => STATUS_CONFIG[p.$status].accentColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 14px 18px;
  transition: box-shadow 0.15s;
  opacity: ${(p) => (p.$interactive ? 1 : 0.55)};

  ${(p) =>
    p.$interactive &&
    css`
      cursor: pointer;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
      }
    `}

  ${(p) =>
    !p.$interactive &&
    css`
      pointer-events: none;
    `}

  ${mediaMobile`
    padding: 10px 12px;
    gap: 10px;
  `}
`;

const TimeColumn = styled.div`
  flex-shrink: 0;
  width: 84px;
  ${mediaMobile`
    width: 70px;
  `}
`;

const TimeText = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${(p) => p.theme.colors.main};
  white-space: nowrap;
  ${mediaMobile`
    font-size: 13px;
  `}
`;

const DurationText = styled.div`
  font-size: 13px;
  color: ${(p) => p.theme.colors.secondary};
  margin-top: 2px;
  ${mediaMobile`
    font-size: 11px;
  `}
`;

const IconsColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${mediaMobile`
    display: none;
  `}
`;

const Meta = styled.div`
  flex: 1;
  min-width: 0;
`;

const ClassName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${mediaMobile`
    font-size: 13px;
  `}
`;

const ClassSubtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondary};
  margin-top: 3px;
  ${mediaMobile`
    font-size: 12px;
  `}
`;

const SubtitleDot = styled.span`
  color: ${(p) => p.theme.borderColor};
`;

const MobileDisciplineIcon = styled.div`
  display: none;
  ${mediaMobile`
    display: flex;
    align-items: center;
  `}
`;

const ActionButton = styled.button<{ $status: BookStatus }>`
  flex-shrink: 0;
  border: 1px solid ${(p) => STATUS_CONFIG[p.$status].buttonBorder};
  border-radius: ${(p) => p.theme.borderRadius};
  background-color: ${(p) => STATUS_CONFIG[p.$status].buttonBg};
  color: ${(p) => STATUS_CONFIG[p.$status].buttonText};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  padding: 7px 18px;
  cursor: ${(p) => (p.$status === "full" ? "default" : "pointer")};
  white-space: nowrap;
  transition: filter 0.1s;

  &:hover:not(:disabled) {
    filter: ${(p) => (p.$status === "free" ? "brightness(94%)" : "none")};
  }

  ${mediaMobile`
    font-size: 12px;
    padding: 5px 10px;
  `}
`;

interface Props {
  clazz: Class;
}

export const ClassListItem = memo(({ clazz }: Props) => {
  const studio = useAppSelector(selectStudio);
  const status = clazz.status as BookStatus;
  const interactive = status === "free" || status === "waitlist";

  const reservationUrl = useMemo(() => {
    if (!clazz.customerUrl) {
      Sentry.captureMessage("Missing customer URL", { extra: { clazz } });
      return "";
    }
    return new URL(clazz.customerUrl, "https://schedule.studio.onepeloton.com")
      .href;
  }, [clazz]);

  const time = useMemo(() => {
    return getLocalTime(clazz.start, studio?.timezone);
  }, [clazz.start, studio?.timezone]);

  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.full;

  return (
    <ItemAnchor
      $status={status}
      $interactive={interactive}
      href={reservationUrl}
      target="_blank"
      aria-label={`${config.label} ${clazz.name} at ${time}`}
    >
      <TimeColumn>
        <TimeText>{time}</TimeText>
        <DurationText>{clazz.duration / 60} min</DurationText>
      </TimeColumn>

      <IconsColumn>
        <InstructorIcon instructor={clazz.instructor} size={44} />
        <DisciplineIcon discipline={clazz.discipline} size={36} />
      </IconsColumn>

      <Meta>
        <ClassName>{clazz.name}</ClassName>
        <ClassSubtitle>
          {clazz.instructor.name}
          <SubtitleDot>·</SubtitleDot>
          {clazz.discipline.name}
          <MobileDisciplineIcon>
            <DisciplineIcon discipline={clazz.discipline} size={20} />
          </MobileDisciplineIcon>
        </ClassSubtitle>
      </Meta>

      <ActionButton $status={status} disabled={!interactive} tabIndex={-1}>
        {config.label}
      </ActionButton>
    </ItemAnchor>
  );
});
