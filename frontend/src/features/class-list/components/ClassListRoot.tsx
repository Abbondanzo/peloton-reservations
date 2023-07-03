import { useEffect } from "react";
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

const Sidebar = styled.aside`
  width: 320px;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.mainSurface};
`;

const MainContent = styled.div`
  flex: 1;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.secondarySurface};
  padding: 16px;
`;

export const ClassListRoot = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const [classId] = Object.entries(STUDIOS).find(
      ([_, value]) => value.location === "New York"
    )!;
    dispatch(fetchClassList(classId));
  }, [dispatch]);
  return (
    <NavbarProvider>
      <BodyWrapper>
        <Sidebar>
          <FiltersWrapper />
        </Sidebar>
        <MainContent>
          <ClassListWrapper />
        </MainContent>
      </BodyWrapper>
    </NavbarProvider>
  );
};
