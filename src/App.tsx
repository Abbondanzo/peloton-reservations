import { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { ClassListWrapper } from "./features/class-list/components/ClassListWrapper";
import { fetchClassList } from "./features/class-list/slices/classListSlice";
import { Location } from "./features/class-list/types/Location";
import { FiltersWrapper } from "./features/filters/components/FiltersWrapper";
import { store } from "./features/store/constants/store";
import { theme } from "./features/store/constants/theme";
import { useAppDispatch } from "./features/store/hooks/useStore";

const CLASS_IDS: { [key in Location]: string } = {
  "New York": "25900000001",
  London: "927437471153653374",
};

const ProvidedApp = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchClassList(CLASS_IDS["New York"]));
  }, [dispatch]);
  return (
    <div>
      <FiltersWrapper />
      <ClassListWrapper />
    </div>
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
