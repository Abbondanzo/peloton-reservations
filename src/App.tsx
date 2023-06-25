import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import "./App.css";
import { client } from "./api/client";
import { ClassListWrapper } from "./components/list/ClassListWrapper";
import { store } from "./constants/store";
import { Location } from "./types/Location";
import { useEffect } from "react";
import { fetchClassList } from "./slices/classListSlice";
import { useAppDispatch } from "./hooks/useStore";

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

const theme: DefaultTheme = {
  borderRadius: "4px",
  borderColor: "#d1d1d1",
  colors: { main: "#494f59", secondary: "" },
};

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ProvidedApp />
        </Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
