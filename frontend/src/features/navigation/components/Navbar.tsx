import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../constants/paths";
import { MobileSidebar } from "./MobileSidebar";
import { SessionInfo } from "./SessionInfo";
// import { SessionInfo } from "./SessionInfo";

const Wrapper = styled.nav`
  height: inherit;
  background-color: #181a2f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const HorizontalFlex = styled.div`
  display: flex;
  column-gap: 8px;
`;

const Logo = styled.img`
  width: 24px;
  height: auto;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const RouteWrapper = styled.div`
  display: flex;
  column-gap: 4em;
  align-items: center;
`;

const Routes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  column-gap: 1.5em;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MenuIcon = styled.span`
  display: block;
  position: relative;

  &,
  &:before,
  &:after {
    width: 100%;
    display: block;
    height: 2px;
    background-color: #fff;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
  }
  &:before {
    top: -6px;
  }
  &:after {
    top: 6px;
  }
`;

const WIDTH_PADDING = 120;

const ShowExpandingMenu = styled.div`
  display: none;
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile + WIDTH_PADDING}px) {
    display: block;
  }
`;

const HideExpandingMenu = styled.div`
  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile + WIDTH_PADDING}px) {
    display: none;
  }
`;

export const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <Wrapper>
      <Link to={Paths.CLASS_LIST}>
        <HorizontalFlex>
          <Logo src={`${process.env.PUBLIC_URL}/images/icon.svg`} alt="Logo" />
          <Title>Peloton Alerts</Title>
        </HorizontalFlex>
      </Link>
      <HideExpandingMenu>
        <RouteWrapper>
          <Routes>
            <Link to={Paths.CLASS_LIST}>Class List</Link>
            <Link to={Paths.ALERTS}>Alerts</Link>
            <Link to={Paths.ABOUT}>FAQ</Link>
          </Routes>
          <SessionInfo />
        </RouteWrapper>
      </HideExpandingMenu>
      <ShowExpandingMenu>
        <IconWrapper onClick={() => setSidebarVisible(true)}>
          <MenuIcon />
        </IconWrapper>
        <MobileSidebar
          open={sidebarVisible}
          onClose={() => setSidebarVisible(false)}
        />
      </ShowExpandingMenu>
    </Wrapper>
  );
};
