import { useEffect } from "react";
import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { ClassListWrapper } from "./features/class-list/components/ClassListWrapper";
import { STUDIOS } from "./features/class-list/constants/studios";
import { fetchClassList } from "./features/class-list/slices/classListSlice";
import { FiltersWrapper } from "./features/filters/components/FiltersWrapper";
import { store } from "./features/store/constants/store";
import { useAppDispatch } from "./features/store/hooks/useStore";
import { theme } from "./features/theme/constants/theme";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Sidebar = styled.div`
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

const ProvidedApp = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const [classId] = Object.entries(STUDIOS).find(
      ([_, value]) => value.location === "New York"
    )!;
    dispatch(fetchClassList(classId));
  }, [dispatch]);
  return (
    <AppWrapper>
      <Sidebar>
        <FiltersWrapper />
      </Sidebar>
      <MainContent>
        <ClassListWrapper />
      </MainContent>
    </AppWrapper>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ProvidedApp />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
