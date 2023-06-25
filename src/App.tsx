import { useEffect } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { ClassListWrapper } from "./components/list/ClassListWrapper";
import { store } from "./constants/store";
import { theme } from "./constants/theme";
import { useAppDispatch } from "./hooks/useStore";
import { fetchClassList } from "./slices/classListSlice";
import { Location } from "./types/Location";

const CLASS_IDS: { [key in Location]: string } = {
  "New York": "25900000001",
  London: "927437471153653374",
};

const ProvidedApp = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchClassList(CLASS_IDS["New York"]));
  }, [dispatch]);
  return <ClassListWrapper />;
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
