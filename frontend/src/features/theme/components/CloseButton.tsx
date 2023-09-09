import styled from "styled-components";

export const CloseButton = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  font-size: 0;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 20px;
    background-color: ${(props) => props.theme.colors.main};
    transform-origin: top left;
    content: "";
  }

  &:before {
    transform: rotate(45deg) translate(-50%, -50%);
  }

  &:after {
    transform: rotate(-45deg) translate(-50%, -50%);
  }
`;
