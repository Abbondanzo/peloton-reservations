import { useEffect } from "react";
import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { ClassListWrapper } from "./features/class-list/components/ClassListWrapper";
import { CLASS_IDS } from "./features/class-list/constants/classIds";
import { fetchClassList } from "./features/class-list/slices/classListSlice";
import { FiltersWrapper } from "./features/filters/components/FiltersWrapper";
import { store } from "./features/store/constants/store";
import { theme } from "./features/store/constants/theme";
import { useAppDispatch } from "./features/store/hooks/useStore";

const AppWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Sidebar = styled.div`
  width: 320px;
  overflow: auto;
`;

const MainContent = styled.div`
  flex: 1;
  overflow: auto;
`;

const ProvidedApp = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchClassList(CLASS_IDS["New York"]));
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
