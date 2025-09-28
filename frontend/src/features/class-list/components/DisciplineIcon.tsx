import * as Sentry from "@sentry/react";
import { useMemo } from "react";
import styled from "styled-components";
import type { Discipline } from "../types/Discipline";

const COLOR_MAP: { [key: string]: string } = {
  Cardio: "#d8ec43",
  Cycling: "#bbd4f4",
  Meditation: "#e6d4ff",
  Rowing: "#cbf293",
  Running: "#fde987",
  Strength: "#ffc0d5",
  Tread: "#fdbe9f",
  Walking: "#ffa8a9",
  Yoga: "#ceffdc",
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

const ImageWrapper = styled.img<IconWrapperProps>`
  width: ${(props) => props.size - props.size * PADDING * 2}px;
  height: ${(props) => props.size - props.size * PADDING * 2}px;
`;

interface Props {
  discipline: Discipline;
  size?: number;
}

export const DisciplineIcon = ({ discipline, size = 32 }: Props) => {
  const color = useMemo(() => {
    const maybeKey = Object.keys(COLOR_MAP).find((key) => {
      const kLC = key.toLowerCase();
      const dLC = discipline.name.toLowerCase();
      return kLC.includes(dLC) || dLC.includes(kLC);
    });
    if (maybeKey) {
      return COLOR_MAP[maybeKey];
    } else {
      const message = `Received unsupported discipline ${discipline.name}`;
      console.log(message);
      Sentry.captureMessage(message);
      return "#fafafa";
    }
  }, [discipline.name]);
  return (
    <IconWrapper color={color} size={size}>
      <ImageWrapper
        alt={discipline.name}
        src={discipline.iconUrl}
        size={size}
        color={color}
      />
    </IconWrapper>
  );
};
