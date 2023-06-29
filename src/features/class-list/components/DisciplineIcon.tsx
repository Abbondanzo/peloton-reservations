import { FC } from "react";
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

interface IconConfig {
  color: string;
  svg: FC<{ size: number }>;
}

const ICON_MAP: { [key: string]: IconConfig } = {
  "1065951803872380843": {
    color: "#d8ec43",
    svg: Cardio,
  },
  "1065951721060042565": {
    color: "#bbd4f4",
    svg: Cycling,
  },
  "1065952163710109047": {
    color: "#e6d4ff",
    svg: Meditation,
  },
  "1065952214125643187": {
    color: "#fde987",
    svg: Running,
  },
  "1065952262083315203": {
    color: "#ffc0d5",
    svg: Strength,
  },
  "1860999437174703939": {
    color: "#fdbe9f",
    svg: Tread,
  },
  "1065952309244069446": {
    color: "#ffa8a9",
    svg: Walking,
  },
  "1065952341187888777": {
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
  const config = ICON_MAP[discipline.id] || ICON_MAP["1065951803872380843"];
  return (
    <IconWrapper color={config.color} size={size}>
      <config.svg size={size - 2 * size * PADDING} />
    </IconWrapper>
  );
};
