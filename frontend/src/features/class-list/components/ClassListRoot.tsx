import { useEffect, useState, MouseEvent } from "react";
import styled from "styled-components";
import { FiltersWrapper } from "../../filters/components/FiltersWrapper";
import { NavbarProvider } from "../../navigation/components/NavbarProvider";
import { useAppDispatch } from "../../store/hooks/useStore";
import { STUDIOS } from "../constants/studios";
import { fetchClassList } from "../slices/classListSlice";
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
  }
`;

const MainContent = styled.div<ToggleProps>`
  flex: 1;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.secondarySurface};
  padding: 16px;

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
      right: 0;
      bottom: 0;
      pointer-events: ${(props) => (props.$toggleVisible ? "all" : "none")};
    }
  }

  @media only screen and (max-width: ${(props) =>
      props.theme.widths.mobile}px) {
    padding: 8px;
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
  const dispatch = useAppDispatch();
  useEffect(() => {
    const [classId] = Object.entries(STUDIOS).find(
      ([_, value]) => value.location === "New York"
    )!;
    dispatch(fetchClassList(classId));
  }, [dispatch]);

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
        >
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
