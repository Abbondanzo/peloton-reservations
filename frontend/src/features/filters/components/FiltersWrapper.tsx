import styled from "styled-components";
import { CloseButton } from "../../theme/components/CloseButton";
import { BookableStatusGroup } from "./BookableStatusGroup";
import { DisciplinesGroup } from "./DisciplinesGroup";
import { InstructorsGroup } from "./InstructorsGroup";
import { StudioGroup } from "./StudioGroup";

const Wrapper = styled.div`
  position: relative;
`;

const Divider = styled.hr`
  background-color: ${(props) => props.theme.borderColor};
  border: none;
  height: 1px;
`;

const AbsoluteCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0;
  right: 0;
  display: none;

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
      <AbsoluteCloseButton onClick={() => onClose()} />
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
