import * as Sentry from "@sentry/react";
import { useMemo } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks/useStore";
import { Card } from "../../theme/components/Card";
import { getLocalTime } from "../operators/getLocalTime";
import { selectStudio } from "../selectors/selectStudio";
import { Class } from "../types/Class";
import { DisciplineIcon } from "./DisciplineIcon";
import { InstructorIcon } from "./InstructorIcon";

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
  overflow: hidden;

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

  @media only screen and (max-width: ${(props) =>
    props.theme.widths.mobile}px) {
    min-width: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TimeWrapper = styled.div`
  margin-right: 8px;
  width: 96px;
  flex-shrink: 0;
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    width: fit-content;
  }
`;

const Time = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.main};
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const HiddenMobile = styled.div`
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    display: none;
  }
`;

const Metadata = styled.div`
  margin-left: 20px;
  min-width: 0;
  flex: 1;
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    margin-left: 4px;
  }
`;

const ClassTitle = styled.div`
  margin-bottom: 4px;
  color: ${(props) => props.theme.colors.secondary};
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    font-size: 12px;
  }
`;

const ClassSubtitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    font-size: 10px;
  }
`;

const Spacer = styled.div`
  width: 18px;
  text-align: center;
  &::before {
    content: "•";
    display: inline-block;
  }
`;

const DisciplineIconWrapper = styled.div`
  margin-left: 4px;
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    display: none;
  }
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

  @media only screen and (max-width: ${(props) =>
    props.theme.widths.mobile}px) {
    font-size: 10px;
    min-width: fit-content;
  }
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
          <TimeWrapper>
            <Time>{getLocalTime(clazz, studio?.timezone || "")} </Time>
            <Duration>{clazz.duration / 60} mins</Duration>
          </TimeWrapper>
          <HiddenMobile>
            <InstructorIcon instructor={clazz.instructor} size={48} />
          </HiddenMobile>
          <Metadata>
            <ClassTitle>{clazz.name}</ClassTitle>
            <ClassSubtitle>
              {clazz.instructor.name}
              <Spacer></Spacer>
              {clazz.discipline.name}
              <DisciplineIconWrapper>
                <DisciplineIcon discipline={clazz.discipline} size={24} />
              </DisciplineIconWrapper>
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
