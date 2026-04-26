import { type MouseEvent, useState } from "react";
import styled from "styled-components";
import { FiltersWrapper } from "../../filters/components/FiltersWrapper";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { NAV_HEIGHT } from "../../navigation/constants/height";
import { useHydrateClassList } from "../hooks/useHydrateClassList";
import { useSwipeToRefresh } from "../hooks/useSwipeToRefresh";
import { ClassListWrapper } from "./ClassListWrapper";

const BodyWrapper = styled.div``;

interface ToggleProps {
  $toggleVisible: boolean;
}

const SIDEBAR_WIDTH = 300;

const Sidebar = styled.aside<ToggleProps>`
  max-width: 100%;
  width: ${SIDEBAR_WIDTH}px;
  top: calc(${NAV_HEIGHT}px + env(safe-area-inset-top, 0px));
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  overflow-y: auto;
  background-color: ${(p) => p.theme.colors.secondarySurface};
  border-right: 1px solid ${(p) => p.theme.borderColor};
  z-index: 1;
  position: fixed;

  @media only screen and (max-width: ${(p) => p.theme.widths.tablet}px) {
    border-right: none;
    transition: left 0.25s;
    left: ${(p) => (p.$toggleVisible ? 0 : -SIDEBAR_WIDTH)}px;
    z-index: 2;
    box-shadow: ${(p) =>
      p.$toggleVisible ? "4px 0 16px rgba(0,0,0,0.08)" : "none"};
  }
`;

const MainContent = styled.div<ToggleProps>`
  flex: 1;
  background-color: ${(p) => p.theme.colors.secondarySurface};
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  position: relative;
  margin-left: ${SIDEBAR_WIDTH}px;

  @media only screen and (max-width: ${(p) => p.theme.widths.tablet}px) {
    margin-left: 0;

    &:before {
      content: "";
      position: fixed;
      background-color: rgba(0, 0, 0, 0.25);
      transition: opacity 0.25s;
      opacity: ${(p) => (p.$toggleVisible ? 1 : 0)};
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      pointer-events: ${(p) => (p.$toggleVisible ? "all" : "none")};
      z-index: 1;
    }
  }

  @media only screen and (max-width: ${(p) => p.theme.widths.mobile}px) {
    padding: 12px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
  }
`;

const SPINNER_SIZE = 40;

const SpinnerContainer = styled.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`;

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: ${SPINNER_SIZE}px;
  height: ${SPINNER_SIZE}px;
  transform-origin: center;
  transition: transform 0.1s;

  --sp-color: ${(p) => p.theme.colors.accent};

  &.animate div {
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
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

const TopBar = styled.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${(p) => p.theme.widths.tablet}px) {
    display: flex;
  }
`;

const FiltersButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.main};
  background-color: ${(p) => p.theme.colors.mainSurface};
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
  cursor: pointer;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px;
  }

  svg {
    flex-shrink: 0;
  }
`;

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M1 3h12M3 7h8M5 11h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

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
          <TopBar>
            <FiltersButton
              type="button"
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                setSidebarVisible(true);
                e.stopPropagation();
              }}
            >
              <FilterIcon />
              Filters
            </FiltersButton>
          </TopBar>
          <ClassListWrapper />
        </MainContent>
      </BodyWrapper>
    </NavbarProvider>
  );
};
