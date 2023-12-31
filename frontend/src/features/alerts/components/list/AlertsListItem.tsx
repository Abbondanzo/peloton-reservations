import { useMemo } from "react";
import { Alert, STUDIOS } from "shared";
import styled from "styled-components";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppSelector } from "../../../store/hooks/useStore";
import { Card } from "../../../theme/components/Card";
import { deleteAlert } from "../../firebase/deleteAlert";
import { getFriendlyTitle } from "../../operators/getFriendlyTitle";

const Wrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  &:hover {
    filter: brightness(96%);
  }
`;

const CardContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
  row-gap: 16px;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 8px;
  row-gap: 8px;
`;

const Title = styled.span`
  font-weight: 500;
`;

const Subtitle = styled.span`
  display: flex;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
`;

const Spacer = styled.div`
  width: 18px;
  text-align: center;
  &::before {
    content: "•";
    display: inline-block;
  }
`;

const EditorButtons = styled.div`
  display: flex;
  column-gap: 8px;
`;

interface Props {
  alert: Alert;
  onDuplicate: () => void;
  onEdit: () => void;
}

export const AlertsListItem = ({ alert, onDuplicate, onEdit }: Props) => {
  const userId = useAppSelector(selectUserId);
  const formattedDate = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formatter.format(alert.created);
  }, [alert.created]);
  return (
    <Wrapper>
      <Card>
        <CardContents>
          <Metadata>
            <Title>{getFriendlyTitle(alert)}</Title>
            <Subtitle>
              {STUDIOS[alert.studioId]?.location || alert.studioId || (
                <i>No studio set</i>
              )}
              <Spacer />
              Created {formattedDate}
            </Subtitle>
          </Metadata>
          <EditorButtons>
            <button type="button" onClick={() => onDuplicate()}>
              Duplicate
            </button>
            <button type="button" onClick={() => onEdit()}>
              Edit
            </button>
            <button
              type="button"
              onClick={() => userId && deleteAlert(userId, alert.id)}
            >
              Delete
            </button>
          </EditorButtons>
        </CardContents>
      </Card>
    </Wrapper>
  );
};
