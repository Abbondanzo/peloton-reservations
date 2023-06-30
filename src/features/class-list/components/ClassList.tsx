import styled from "styled-components";
import { selectHasFilters } from "../../filters/selectors/selectHasFilters";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectFilteredClassesGroups } from "../selectors/selectFilteredClassesGroups";
import { Class } from "../types/Class";
import { ClassListItem } from "./ClassListItem";
import { Card } from "./atoms/Card";

const Wrapper = styled.div`
  & > *:not(:last-child) {
    display: block;
    margin-bottom: 8px;
  }
`;

const GroupWrapper = styled.div`
  & > *:not(:last-child) {
    display: block;
    margin-bottom: 8px;
  }
`;

const GroupTitle = styled.div`
  text-transform: uppercase;
  padding: 8px;
  padding-top: 16px;
  font-size: 14px;
`;

const TipText = styled.i`
  margin-top: 4px;
  font-size: 12px;
`;

interface Props {
  classes: Class[];
}

export const ClassList = ({ classes }: Props) => {
  const filteredGroups = useAppSelector((state) =>
    selectFilteredClassesGroups(state, classes)
  );
  const hasFilters = useAppSelector(selectHasFilters);
  const isFreeSelected = useAppSelector(
    (state) => state.filters.showBookableStatus === "free"
  );

  if (filteredGroups.length === 0) {
    return (
      <Card>
        <p>No classes!</p>
        {hasFilters && (
          <TipText>
            Tip: Try resetting your filters or selecting more options in the
            sidebar.
          </TipText>
        )}
        {isFreeSelected && !hasFilters && (
          <TipText>
            Tip: Try checking back exactly at 12:00 pm on Mondays and Thursdays.
            This is usually when new classes open up.
          </TipText>
        )}
      </Card>
    );
  }

  return (
    <Wrapper>
      {filteredGroups.map((group, index) => {
        return (
          <GroupWrapper key={index}>
            <GroupTitle>{group.formattedDate}</GroupTitle>
            {group.classes.map((clazz, index) => {
              return <ClassListItem key={index} clazz={clazz} />;
            })}
          </GroupWrapper>
        );
      })}
    </Wrapper>
  );
};
