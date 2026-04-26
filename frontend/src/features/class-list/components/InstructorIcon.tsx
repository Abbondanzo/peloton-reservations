import styled from "styled-components";
import type { Instructor } from "../types/Instructor";

interface InstructorImageProps {
  size: number;
}

const InstructorImage = styled.img<InstructorImageProps>`
  width: ${(props) => props.size}px;
  min-width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.secondarySurface};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.secondary};
`;

interface Props {
  instructor: Instructor;
  size?: number;
}

export const InstructorIcon = ({ instructor, size = 32 }: Props) => {
  return (
    <InstructorImage
      src={instructor.imageUrl}
      alt={`Profile of ${instructor.name}`}
      size={size}
    />
  );
};
