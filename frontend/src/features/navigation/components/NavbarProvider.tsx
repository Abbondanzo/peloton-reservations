import type { ReactNode } from "react";
import styled from "styled-components";
import { NAV_HEIGHT } from "../constants/height";
import { Navbar } from "./Navbar";

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const NavWrapper = styled.div`
  position: sticky;
  height: calc(${NAV_HEIGHT}px + env(safe-area-inset-top));
  top: 0;
  z-index: 1;
`;

const BodyWrapper = styled.div`
  flex: 1;
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
