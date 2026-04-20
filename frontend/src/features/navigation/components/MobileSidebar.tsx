import type { MouseEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks/useStore";
import { selectIsAdmin } from "../../session/selectors/selectIsAdmin";
import { Paths } from "../constants/paths";
import { AppLogo } from "./AppLogo";
import { MobileSessionInfo } from "./MobileSessionInfo";

const NAV_BG = "#181a2f";
const SIDEBAR_WIDTH = 280;

interface OpenProps {
  $open: boolean;
}

const Backdrop = styled.div<OpenProps>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? "all" : "none")};
  z-index: 10;
`;

const Drawer = styled.div<OpenProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${SIDEBAR_WIDTH}px;
  max-width: 90vw;
  background-color: ${(p) => p.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${(p) => (p.$open ? "0" : "100%")});
  overflow: hidden;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${NAV_BG};
  color: #fff;
  flex-shrink: 0;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`;

const BrandName = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const NavSection = styled.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.main};
  text-decoration: none;
  transition: background-color 0.1s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.active {
    color: ${(p) => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.accent}0a;
  }
`;

const SessionSection = styled.div`
  padding: 16px 20px;
  border-top: 1px solid ${(p) => p.theme.borderColor};
  flex-shrink: 0;
`;

const CloseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 4l10 10M14 4L4 14"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

interface Props {
  open: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ open, onClose }: Props) => {
  const isAdmin = useAppSelector(selectIsAdmin);

  return (
    <>
      <Backdrop $open={open} onClick={onClose} />
      <Drawer
        $open={open}
        onClick={(e: MouseEvent) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <DrawerHeader>
          <Brand to={Paths.CLASS_LIST} onClick={onClose}>
            <AppLogo size={20} />
            <BrandName>Peloton Alerts</BrandName>
          </Brand>
          <CloseButton onClick={onClose} aria-label="Close menu">
            <CloseIcon />
          </CloseButton>
        </DrawerHeader>

        <NavSection onClick={onClose}>
          <NavItem to={Paths.CLASS_LIST} end>
            Classes
          </NavItem>
          <NavItem to={Paths.ALERTS}>Alerts</NavItem>
          <NavItem to={Paths.ABOUT} end>
            FAQ
          </NavItem>
          {isAdmin && <NavItem to={Paths.STATS}>Stats</NavItem>}
        </NavSection>

        <SessionSection>
          <MobileSessionInfo />
        </SessionSection>
      </Drawer>
    </>
  );
};
