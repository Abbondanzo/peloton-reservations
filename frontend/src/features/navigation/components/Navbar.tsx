import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectIsAdmin } from "../../session/selectors/selectIsAdmin";
import { Paths } from "../constants/paths";
import { MobileSidebar } from "./MobileSidebar";
import { SessionInfo } from "./SessionInfo";

const NAV_BG = "#181a2f";
const COLLAPSE_AT = 680;

const Wrapper = styled.nav`
  height: inherit;
  background-color: ${NAV_BG};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 20px 0;
  gap: 16px;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (min-width: ${COLLAPSE_AT + 1}px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`;

const Logo = styled.img`
  width: 22px;
  height: 22px;
`;

const BrandName = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${COLLAPSE_AT}px) {
    display: none;
  }
`;

const NavItem = styled(NavLink)`
  font-size: 15px;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.15s, background-color 0.15s;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.08);
  }

  &.active {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${COLLAPSE_AT}px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  @media only screen and (max-width: ${COLLAPSE_AT}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HamburgerIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 5h14M3 10h14M3 15h14"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

export const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isAdmin = useAppSelector(selectIsAdmin);

  return (
    <>
      <Wrapper>
        <Brand to={Paths.CLASS_LIST}>
          <Logo src={`${import.meta.env.BASE_URL}images/icon.svg`} alt="" />
          <BrandName>Peloton Alerts</BrandName>
        </Brand>

        <NavLinks>
          <NavItem to={Paths.CLASS_LIST} end>
            Classes
          </NavItem>
          <NavItem to={Paths.ALERTS}>Alerts</NavItem>
          <NavItem to={Paths.ABOUT} end>
            FAQ
          </NavItem>
          {isAdmin && <NavItem to={Paths.STATS}>Stats</NavItem>}
        </NavLinks>

        <RightSection>
          <SessionInfo />
        </RightSection>

        <HamburgerButton
          type="button"
          aria-label="Open menu"
          onClick={() => setSidebarVisible(true)}
        >
          <HamburgerIcon />
        </HamburgerButton>
      </Wrapper>

      <MobileSidebar
        open={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </>
  );
};
