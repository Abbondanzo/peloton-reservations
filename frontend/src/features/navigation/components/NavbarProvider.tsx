import { ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const HEIGHT = 60;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
`;

const NavWrapper = styled.div`
  position: sticky;
  height: ${HEIGHT}px;
  top: 0;
  z-index: 1;
`;

const BodyWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.secondarySurface};
  height: calc(100% - ${HEIGHT}px);
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
