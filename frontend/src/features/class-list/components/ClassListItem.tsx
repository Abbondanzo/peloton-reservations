import * as Sentry from "@sentry/react";
import { useMemo } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks/useStore";
import { getLocalTime } from "../operators/getLocalTime";
import { selectStudio } from "../selectors/selectStudio";
import { Class } from "../types/Class";
import { DisciplineIcon } from "./DisciplineIcon";
import { InstructorIcon } from "./InstructorIcon";
import { Card } from "./atoms/Card";

interface InteractiveProps {
  $interactive: boolean;
}

const Anchor = styled.a<InteractiveProps>`
  text-decoration: none;
  color: inherit;
  display: block;

  ${(props) =>
    !props.$interactive &&
    `
    pointer-events: none;
    cursor: default;
    `}
`;

const InteractiveCard = styled(Card)<InteractiveProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px 1px;
  min-width: 500px;

  ${(props) =>
    props.$interactive
      ? `
        cursor: pointer;
        &:hover, &:active {
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
  color: ${(props) => props.theme.colors.main};
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
  min-width: 180px;
  height: 40px;
  line-height: 0;
  padding: 1.5em;
  font-family: "Inter";
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: ${(props) => props.theme.borderRadius};
  text-transform: uppercase;
  margin-left: 8px;

  ${(props) =>
    props.$interactive
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

export const ClassListItem = ({ clazz }: Props) => {
  const studio = useAppSelector(selectStudio);
  const interactive = clazz.free || !clazz.waitlistFull;
  const slug = useMemo(() => {
    switch (studio?.location) {
      case "New York":
        return `new-york/schedule/${clazz.id}/reserve`;
      case "London":
        return `london/schedule/${clazz.id}/reserve`;
      default:
        Sentry.captureMessage("Missing studio");
        return "";
    }
  }, [clazz.id, studio?.location]);
  return (
    <Anchor
      $interactive={interactive}
      href={`https://studio.onepeloton.com/${slug}`}
      target="_blank"
    >
      <InteractiveCard $interactive={interactive}>
        <ContentWrapper>
          <Time>{getLocalTime(clazz, studio?.timezone || "")} </Time>
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
        <Button $interactive={interactive} disabled={!interactive}>
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
