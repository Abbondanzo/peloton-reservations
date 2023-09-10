import { MouseEvent, useState } from "react";
import styled from "styled-components";
import { FiltersWrapper } from "../../filters/components/FiltersWrapper";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { useHydrateClassList } from "../hooks/useHydrateClassList";
import { useSwipeToRefresh } from "../hooks/useSwipeToRefresh";
import { ClassListWrapper } from "./ClassListWrapper";

const BodyWrapper = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  min-height: 100%;
`;

interface ToggleProps {
  $toggleVisible: boolean;
}

const SIDEBAR_WIDTH = 320;

const Sidebar = styled.aside<ToggleProps>`
  max-width: 100%;
  width: ${SIDEBAR_WIDTH}px;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.mainSurface};
  z-index: 1;

  @media only screen and (max-width: ${(props) =>
      props.theme.widths.tablet}px) {
    position: absolute;
    transition: left 0.25s;
    left: ${(props) => (props.$toggleVisible ? 0 : -SIDEBAR_WIDTH)}px;
    top: 0;
    bottom: 0;
    z-index: 1;
  }
`;

const MainContent = styled.div<ToggleProps>`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.secondarySurface};
  padding: 16px;
  position: relative;

  @media only screen and (max-width: ${(props) =>
      props.theme.widths.tablet}px) {
    &:before {
      content: "";
      position: fixed;
      background-color: rgba(0, 0, 0, 0.25);
      transition: opacity 0.25s;
      opacity: ${(props) => (props.$toggleVisible ? 1 : 0)};
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      pointer-events: ${(props) => (props.$toggleVisible ? "all" : "none")};
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    padding: 8px;
  }
`;

const SPINNER_SIZE = 40;

const SpinnerContainer = styled.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100vw;
  top: -${SPINNER_SIZE + 10}px;
  text-align: center;
`;

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${SPINNER_SIZE}px;
  height: ${SPINNER_SIZE}px;
  transform-origin: center;
  transition: transform 0.1s;

  --sp-color: ${(props) => props.theme.colors.accent};

  &.animate div {
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1);
    border-color: var(--sp-color) transparent transparent transparent;
  }

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${SPINNER_SIZE}px;
    height: ${SPINNER_SIZE}px;
    border: 6px solid var(--sp-color);
    border-radius: 50%;
    border-color: var(--sp-color) var(--sp-color) var(--sp-color) transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const FiltersButton = styled.button`
  display: none;
  border: 0;
  height: 40px;
  line-height: 0;
  padding: 1.5em;
  font-family: "Inter";
  border-color: ${(props) => props.theme.colors.secondary};
  border-style: solid;
  border-radius: ${(props) => props.theme.borderRadius};
  border-width: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
  cursor: pointer;

  @media only screen and (max-width: ${(props) =>
      props.theme.widths.tablet}px) {
    display: block;
  }
`;

export const ClassListRoot = () => {
  const { refresh } = useHydrateClassList();
  const { swipeRef, spinnerRef } = useSwipeToRefresh({ refresh });

  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <NavbarProvider>
      <BodyWrapper>
        <Sidebar $toggleVisible={sidebarVisible}>
          <FiltersWrapper
            onClose={() => {
              setSidebarVisible(false);
            }}
          />
        </Sidebar>
        <MainContent
          $toggleVisible={sidebarVisible}
          onClick={() => {
            setSidebarVisible(false);
          }}
          ref={swipeRef}
        >
          <SpinnerContainer>
            <Spinner ref={spinnerRef}>
              <div />
              <div />
              <div />
            </Spinner>
          </SpinnerContainer>
          <FiltersButton
            type="button"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              setSidebarVisible(true);
              e.stopPropagation();
            }}
          >
            Show Filters
          </FiltersButton>
          <ClassListWrapper />
        </MainContent>
      </BodyWrapper>
    </NavbarProvider>
  );
};
