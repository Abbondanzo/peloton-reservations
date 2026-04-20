import { useMemo } from "react";
import styled from "styled-components";
import { selectHasFilters } from "../../filters/selectors/selectHasFilters";
import { useAppSelector } from "../../store/hooks/useStore";
import { mediaMobile } from "../../theme/constants/queries";
import { selectFilteredClassesGroups } from "../selectors/selectFilteredClassesGroups";
import type { Class } from "../types/Class";
import { ClassListItem } from "./ClassListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
  margin-bottom: 2px;
`;

const GroupDate = styled.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${(p) => p.theme.colors.main};
  margin: 0;
`;

const GroupMeta = styled.span`
  font-size: 13px;
  color: ${(p) => p.theme.colors.secondary};
`;

const EmptyState = styled.div`
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${mediaMobile`
    padding: 24px 16px;
  `}
`;

const EmptyTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.main};
  margin: 0 0 8px;
`;

const EmptyHint = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`;

interface Props {
  classes: Class[];
  fulfilledTimeStamp?: number;
}

export const ClassList = ({ classes, fulfilledTimeStamp }: Props) => {
  const filteredGroups = useAppSelector((state) =>
    selectFilteredClassesGroups(state, classes)
  );
  const hasFilters = useAppSelector(selectHasFilters);
  const isFreeSelected = useAppSelector((state) =>
    state.filters.selectedBookableStatuses.includes("free")
  );
  const lastUpdated = useMemo(() => {
    if (!fulfilledTimeStamp) return undefined;
    const formatter = new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    return formatter.format(fulfilledTimeStamp);
  }, [fulfilledTimeStamp]);

  if (filteredGroups.length === 0) {
    return (
      <EmptyState>
        <EmptyTitle>No classes found</EmptyTitle>
        {hasFilters && (
          <EmptyHint>
            Try resetting your filters or selecting more options in the sidebar.
          </EmptyHint>
        )}
        {isFreeSelected && !hasFilters && (
          <EmptyHint>
            New classes usually open at 12:00 pm on Mondays and Thursdays in
            your studio's timezone.
          </EmptyHint>
        )}
      </EmptyState>
    );
  }

  return (
    <Wrapper>
      {filteredGroups.map((group, index) => (
        <GroupWrapper key={index}>
          <GroupHeader>
            <GroupDate>{group.formattedDate}</GroupDate>
            {index === 0 && lastUpdated && (
              <GroupMeta>
                Times in studio timezone · loaded {lastUpdated}
              </GroupMeta>
            )}
            {index === 0 && !lastUpdated && (
              <GroupMeta>All times in studio timezone</GroupMeta>
            )}
          </GroupHeader>
          {group.classes.map((clazz, i) => (
            <ClassListItem key={i} clazz={clazz} />
          ))}
        </GroupWrapper>
      ))}
    </Wrapper>
  );
};
