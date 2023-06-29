import styled from "styled-components";
import { Instructor } from "../types/Instructor";

interface InstructorImageProps {
  size: number;
}

const InstructorImage = styled.img<InstructorImageProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  color: #bbb;
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
