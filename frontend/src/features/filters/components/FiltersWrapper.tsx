import styled from "styled-components";
import { BookableStatusGroup } from "./BookableStatusGroup";
import { InstructorsGroup } from "./InstructorsGroup";
import { DisciplinesGroup } from "./DisciplinesGroup";
import { StudioGroup } from "./StudioGroup";

const Wrapper = styled.div`
  position: relative;
`;

const Divider = styled.hr`
  background-color: ${(props) => props.theme.borderColor};
  border: none;
  height: 1px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  width: 50px;
  height: 50px;
  font-size: 0;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.main};
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;
    content: "";
  }

  &:after {
    transform: rotate(-45deg) translate(-50%, -50%);
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.widths.tablet}px) {
    display: block;
  }
`;

interface Props {
  onClose: () => void;
}

export const FiltersWrapper = ({ onClose }: Props) => {
  return (
    <Wrapper>
      <CloseButton onClick={() => onClose()} />
      <StudioGroup />
      <Divider />
      <BookableStatusGroup />
      <Divider />
      <DisciplinesGroup />
      <Divider />
      <InstructorsGroup />
    </Wrapper>
  );
};
