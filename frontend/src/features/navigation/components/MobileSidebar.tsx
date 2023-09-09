import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../constants/paths";
import { MobileSessionInfo } from "./MobileSessionInfo";

interface ToggleProps {
  $open: boolean;
}

const Wrapper = styled.div<ToggleProps>`
  color: ${(props) => props.theme.colors.main};
  &:before {
    content: "";
    position: fixed;
    background-color: rgba(0, 0, 0, 0.25);
    transition: opacity 0.25s;
    opacity: ${(props) => (props.$open ? 1 : 0)};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: ${(props) => (props.$open ? "all" : "none")};
  }
`;

const SIDEBAR_WIDTH = 320;

const SidebarWrapper = styled.div<ToggleProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  transition: right 0.25s;
  right: ${(props) => (props.$open ? 0 : -SIDEBAR_WIDTH)}px;
  top: 0;
  bottom: 0;
  max-width: 100%;
  width: ${SIDEBAR_WIDTH}px;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.mainSurface};
`;

const CloseIcon = styled.span`
  width: 24px;
  height: 24px;
  margin: 16px;
  float: right;
  display: block;
  position: relative;
  cursor: pointer;
  align-self: flex-end;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: 50%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.main};
    transition-duration: 0.25s;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const Routes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const RouteItem = styled(Link)`
  padding: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const SessionInfoWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
`;

interface Props {
  open: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ open, onClose }: Props) => {
  return (
    <Wrapper
      $open={open}
      onClick={() => {
        onClose();
      }}
    >
      <SidebarWrapper
        $open={open}
        onClick={(e: MouseEvent<HTMLElement>) => {
          e.stopPropagation();
        }}
      >
        <CloseIcon onClick={() => onClose()} />
        <Routes onClick={() => onClose()}>
          <RouteItem to={Paths.CLASS_LIST} onClick={console.log}>
            Class List
          </RouteItem>
          <RouteItem to={Paths.ALERTS}>Alerts</RouteItem>
          <RouteItem to={Paths.ABOUT}>FAQ</RouteItem>
        </Routes>
        <SessionInfoWrapper>
          <MobileSessionInfo />
        </SessionInfoWrapper>
      </SidebarWrapper>
    </Wrapper>
  );
};
