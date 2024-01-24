import * as Sentry from "@sentry/react";
import { FC, useEffect } from "react";
import styled from "styled-components";
import { Discipline } from "../types/Discipline";
import { Cardio } from "./icons/Cardio";
import { Cycling } from "./icons/Cycling";
import { Meditation } from "./icons/Meditation";
import { Running } from "./icons/Running";
import { Strength } from "./icons/Strength";
import { Tread } from "./icons/Tread";
import { Walking } from "./icons/Walking";
import { Yoga } from "./icons/Yoga";
import { Rowing } from "./icons/Rowing";

interface IconConfig {
  color: string;
  svg: FC<{ size: number }>;
}

const ICON_MAP: { [key: string]: IconConfig } = {
  "711-B": {
    color: "#d8ec43",
    svg: Cardio,
  },
  "694": {
    color: "#bbd4f4",
    svg: Cycling,
  },
  "709": {
    color: "#e6d4ff",
    svg: Meditation,
  },
  "712": {
    color: "#cbf293",
    svg: Rowing,
  },
  "708": {
    color: "#fde987",
    svg: Running,
  },
  "711": {
    color: "#ffc0d5",
    svg: Strength,
  },
  "710": {
    color: "#fdbe9f",
    svg: Tread,
  },
  "708-B": {
    color: "#ffa8a9",
    svg: Walking,
  },
  "709-B": {
    color: "#ceffdc",
    svg: Yoga,
  },
};
const PADDING = 0.2;

interface IconWrapperProps {
  color: string;
  size: number;
}

const IconWrapper = styled.div<IconWrapperProps>`
  width: ${(props) => props.size - props.size * PADDING * 2}px;
  height: ${(props) => props.size - props.size * PADDING * 2}px;
  border-radius: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  padding: ${(props) => props.size * PADDING}px;
`;

interface Props {
  discipline: Discipline;
  size?: number;
}

export const DisciplineIcon = ({ discipline, size = 32 }: Props) => {
  const config = ICON_MAP[discipline.id] || ICON_MAP["711-B"];
  useEffect(() => {
    if (!ICON_MAP[discipline.id]) {
      const message = `Received unsupported discipline ${discipline.id}`;
      console.log(message);
      Sentry.captureMessage(message);
    }
  }, [discipline.id]);

  return (
    <IconWrapper color={config.color} size={size}>
      <config.svg size={size - 2 * size * PADDING} />
    </IconWrapper>
  );
};
