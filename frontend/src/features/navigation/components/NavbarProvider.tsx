import { ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const HEIGHT = 60;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const NavWrapper = styled.div`
  height: ${HEIGHT}px;
`;

const BodyWrapper = styled.div`
  flex: 1;
  height: calc(100% - ${HEIGHT}px);
  background-color: ${(props) => props.theme.colors.secondarySurface};
  overflow-y: auto;
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
