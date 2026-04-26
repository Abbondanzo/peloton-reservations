import * as Sentry from "@sentry/react";
import { useMemo } from "react";
import styled, { useTheme } from "styled-components";
import type { Discipline } from "../types/Discipline";

const COLOR_MAP: { [key: string]: string } = {
  Cardio: "#d8ec43",
  Cycling: "#bbd4f4",
  Meditation: "#e6d4ff",
  Rowing: "#cbf293",
  "Outdoor Run": "#a8e6cf",
  "Outdoor Run/Walk": "#94f3d0",
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

const inner = (size: number) => Math.round(size * (1 - PADDING * 2));
const pad = (size: number) => Math.round(size * PADDING);

const IconWrapper = styled.div<IconWrapperProps>`
  width: ${(props) => inner(props.size)}px;
  height: ${(props) => inner(props.size)}px;
  border-radius: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
  padding: ${(props) => pad(props.size)}px;
  flex-shrink: 0;
`;

const ImageWrapper = styled.img<IconWrapperProps>`
  width: ${(props) => inner(props.size)}px;
  height: ${(props) => inner(props.size)}px;
  display: block;
`;

interface Props {
  discipline: Discipline;
  size?: number;
}

export const DisciplineIcon = ({ discipline, size = 32 }: Props) => {
  const theme = useTheme();
  const color = useMemo(() => {
    const keys = Object.keys(COLOR_MAP);
    const dLC = discipline.name.toLowerCase();
    const maybeKey =
      keys.find((key) => key.toLowerCase() === dLC) ??
      keys.find((key) => {
        const kLC = key.toLowerCase();
        return kLC.includes(dLC) || dLC.includes(kLC);
      });
    if (maybeKey) {
      return COLOR_MAP[maybeKey];
    } else {
      const message = `Received unsupported discipline ${discipline.name}`;
      console.log(message);
      Sentry.captureMessage(message);
      return theme.colors.secondarySurface;
    }
  }, [discipline.name, theme.colors.secondarySurface]);
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
