import type { ReactNode } from "react";
import styled from "styled-components";
import { NAV_HEIGHT } from "../constants/height";
import { Navbar } from "./Navbar";

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
`;

const NavWrapper = styled.div`
  position: sticky;
  height: ${NAV_HEIGHT}px;
  top: 0;
  z-index: 1;
`;

const BodyWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondarySurface};
`;

interface Props {
  children: ReactNode;
}

export const NavbarProvider = ({ children }: Props) => {
  return (
    <Wrapper>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <BodyWrapper>{children}</BodyWrapper>
    </Wrapper>
  );
};
