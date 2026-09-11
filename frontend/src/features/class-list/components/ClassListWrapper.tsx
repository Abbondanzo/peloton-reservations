import styled from "styled-components";
import { useAppSelector } from "../../store/hooks/useStore";
import { mediaMobile } from "../../theme/constants/queries";
import { selectStudioId } from "../selectors/selectStudioId";
import {
  RATE_LIMIT_MESSAGE,
  getErrorMessage,
  isRateLimitError,
  useGetClassesQuery,
} from "../services/pelotonApi";
import { ClassList } from "./ClassList";

const StateCard = styled.div`
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${mediaMobile`
    padding: 24px 16px;
  `}
`;

const StateText = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.secondary};
  margin: 0;
`;

const ErrorText = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.error};
  margin: 0 0 6px;
`;

const ErrorDetail = styled.code`
  font-size: 12px;
  color: ${(p) => p.theme.colors.secondary};
`;

const RetryButton = styled.button`
  border: none;
  background: none;
  color: ${(p) => p.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
  margin-top: 8px;
`;

export const ClassListWrapper = () => {
  const studioId = useAppSelector(selectStudioId);
  const { currentData, isLoading, error, fulfilledTimeStamp, refetch } =
    useGetClassesQuery(studioId, { refetchOnMountOrArgChange: true });

  if (error && !isLoading) {
    if (isRateLimitError(error)) {
      return (
        <StateCard>
          <ErrorText>Too many requests</ErrorText>
          <StateText>{RATE_LIMIT_MESSAGE}</StateText>
          <RetryButton type="button" onClick={refetch}>
            Try again
          </RetryButton>
        </StateCard>
      );
    }
    return (
      <StateCard>
        <ErrorText>Failed to load classes</ErrorText>
        <ErrorDetail>{getErrorMessage(error)}</ErrorDetail>
      </StateCard>
    );
  }

  if (!currentData || isLoading) {
    return (
      <StateCard>
        <StateText>Loading classes…</StateText>
      </StateCard>
    );
  }

  return (
    <ClassList classes={currentData} fulfilledTimeStamp={fulfilledTimeStamp} />
  );
};
