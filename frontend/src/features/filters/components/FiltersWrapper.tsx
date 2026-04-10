import styled from "styled-components";
import { CloseButton } from "../../theme/components/CloseButton";
import { mediaTablet } from "../../theme/constants/queries";
import { BookableStatusGroup } from "./BookableStatusGroup";
import { DisciplinesGroup } from "./DisciplinesGroup";
import { InstructorsGroup } from "./InstructorsGroup";
import { StudioGroup } from "./StudioGroup";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${(p) => p.theme.colors.secondarySurface};
  z-index: 1;

  ${mediaTablet`
    display: flex;
  `}
`;

const HeaderTitle = styled.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(p) => p.theme.colors.main};
  margin: 0;
`;

const StyledCloseButton = styled(CloseButton)`
  display: none;

  ${mediaTablet`
    display: block;
  `}
`;

const FilterSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`;

const Section = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`;

interface Props {
  onClose: () => void;
}

export const FiltersWrapper = ({ onClose }: Props) => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Filters</HeaderTitle>
        <StyledCloseButton onClick={() => onClose()} />
      </Header>
      <FilterSections>
        <Section>
          <StudioGroup />
        </Section>
        <Section>
          <BookableStatusGroup />
        </Section>
        <Section>
          <DisciplinesGroup />
        </Section>
        <Section>
          <InstructorsGroup />
        </Section>
      </FilterSections>
    </Wrapper>
  );
};
