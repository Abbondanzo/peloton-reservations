import { useState } from "react";
import type { ClassSnapshot } from "shared";
import styled from "styled-components";
import { getLocalDate } from "../../../class-list/operators/getLocalDate";
import { getLocalTime } from "../../../class-list/operators/getLocalTime";

const Toggle = styled.button`
  background: none;
  border: none;
  padding: 4px 0;
  font-family: inherit;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;

const List = styled.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Item = styled.li`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const DetectedAt = styled.span`
  font-size: 11px;
  opacity: 0.6;
`;

interface Props {
  snapshots: ClassSnapshot[];
  timezone?: string;
}

export const SkippedRow = ({ snapshots, timezone }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const count = snapshots.length;

  return (
    <div>
      <Toggle type="button" onClick={() => setExpanded((v) => !v)}>
        <span>{expanded ? "▾" : "▸"}</span>
        {count} class{count === 1 ? "" : "es"} skipped
      </Toggle>
      {expanded && (
        <List>
          {snapshots.map((s, i) => {
            const classDate = timezone
              ? getLocalDate(s.starts_at, timezone, false)
              : "";
            const classTime = getLocalTime(s.starts_at, timezone);
            const detectedTime = getLocalTime(
              new Date(s.snapshotAt).toISOString(),
              timezone
            );
            return (
              <Item key={i}>
                <span>
                  {classDate} {classTime}
                  {s.name ? ` · ${s.name}` : ""}
                  {s.instructors[0] ? ` · ${s.instructors[0].name}` : ""}
                </span>
                <DetectedAt>detected at {detectedTime}</DetectedAt>
              </Item>
            );
          })}
        </List>
      )}
    </div>
  );
};
