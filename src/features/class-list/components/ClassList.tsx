import styled from "styled-components";
import { Class } from "../types/Class";
import { ClassListItem } from "./ClassListItem";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectFilteredClasses } from "../selectors/selectFilteredClasses";
import { Card } from "./atoms/Card";
import { selectHasFilters } from "../../filters/selectors/selectHasFilters";

const Wrapper = styled.div`
  & > *:not(:last-child) {
    display: block;
    margin-bottom: 8px;
  }
`;

const TipText = styled.i`
  margin-top: 4px;
  font-size: 12px;
`;

interface Props {
  classes: Class[];
}

export const ClassList = ({ classes }: Props) => {
  const filteredClasses = useAppSelector((state) =>
    selectFilteredClasses(state, classes)
  );
  const hasFilters = useAppSelector(selectHasFilters);

  if (filteredClasses.length === 0) {
    return (
      <Card>
        <p>No classes!</p>
        {hasFilters && (
          <TipText>
            Tip: Try resetting your filters or selecting more options in the
            sidebar.
          </TipText>
        )}
      </Card>
    );
  }

  return (
    <Wrapper>
      {filteredClasses.map((clazz, index) => {
        return <ClassListItem key={index} clazz={clazz} />;
      })}
    </Wrapper>
  );
};
