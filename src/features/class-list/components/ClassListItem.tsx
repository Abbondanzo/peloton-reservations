import styled from "styled-components";
import { Class } from "../types/Class";
import { Card } from "./atoms/Card";
import { DisciplineIcon } from "./DisciplineIcon";
import { useMemo } from "react";
import { InstructorIcon } from "./InstructorIcon";
import { useAppSelector } from "../../store/hooks/useStore";
import { CLASS_IDS } from "../constants/classIds";

interface InteractiveProps {
  interactive: boolean;
}

const Anchor = styled.a<InteractiveProps>`
  text-decoration: none;
  color: inherit;

  ${(props) =>
    !props.interactive &&
    `
    pointer-events: none;
    cursor: default;
    `}
`;

const InteractiveCard = styled(Card)<InteractiveProps>`
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 1px;

  ${(props) =>
    props.interactive
      ? `
        cursor: pointer;
        &:hover {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;
          cursor: pointer;
        }
        `
      : `opacity: 0.5;`}
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Time = styled.div`
  margin-right: 8px;
  width: 80px;
  font-weight: 600;
`;

const Metadata = styled.div`
  margin-left: 20px;
`;

const ClassTitle = styled.div`
  margin-bottom: 4px;
  color: ${(props) => props.theme.colors.secondary};
`;

const ClassSubtitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Spacer = styled.div`
  width: 18px;
  text-align: center;
  &::before {
    content: "•";
    display: inline-block;
  }
`;

const MarginLeft = styled.div`
  margin-left: 4px;
`;

const Button = styled.button<InteractiveProps>`
  border: 0;
  width: 200px;
  font-family: "Inter";
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: ${(props) => props.theme.borderRadius};
  text-transform: uppercase;

  ${(props) =>
    props.interactive
      ? `
        color: #fff;
        cursor: pointer;
        &:hover {
          filter: brightness(96%);
        }
        `
      : `
        background-color: transparent;  
        `}
`;

interface Props {
  clazz: Class;
}

const formatTime = (date: Date) => {
  const hour = ((date.getHours() - 1) % 12) + 1;
  let minute = date.getMinutes().toString();
  if (minute.length < 2) {
    minute = "0" + minute;
  }
  const extension = date.getHours() >= 12 ? "pm" : "am";
  return `${hour}:${minute} ${extension}`;
};

export const ClassListItem = ({ clazz }: Props) => {
  const studioId = useAppSelector((state) => state.classList.studioId);
  const date = useMemo(() => new Date(clazz.start * 1000), [clazz.start]);
  const interactive = clazz.free || !clazz.waitlistFull;
  const slug = useMemo(() => {
    const locations = Object.keys(CLASS_IDS) as (keyof typeof CLASS_IDS)[];
    const location = locations.find(
      (location) => CLASS_IDS[location] === studioId
    );
    switch (location) {
      case "New York":
        return `new-york/schedule/${clazz.id}/reserve`;
      case "London":
        return `london/schedule/${clazz.id}/reserve`;
      default:
        return "";
    }
  }, [clazz.id, studioId]);
  return (
    <Anchor
      interactive={interactive}
      href={`https://studio.onepeloton.com/${slug}`}
      target="_blank"
    >
      <InteractiveCard interactive={interactive}>
        <ContentWrapper>
          <Time>{formatTime(date)}</Time>
          <InstructorIcon instructor={clazz.instructor} size={48} />
          <Metadata>
            <ClassTitle>{clazz.name}</ClassTitle>
            <ClassSubtitle>
              {clazz.instructor.name}
              <Spacer></Spacer>
              {clazz.discipline.name}
              <MarginLeft>
                <DisciplineIcon discipline={clazz.discipline} size={24} />
              </MarginLeft>
            </ClassSubtitle>
          </Metadata>
        </ContentWrapper>
        <Button interactive={interactive} disabled={!interactive}>
          {clazz.free
            ? "Book"
            : !clazz.waitlistFull
            ? "Waitlist"
            : "Class Full"}
        </Button>
      </InteractiveCard>
    </Anchor>
  );
};
