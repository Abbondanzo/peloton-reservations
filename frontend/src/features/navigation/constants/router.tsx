import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { AboutRoot } from "../../about/components/AboutRoot";
import { ClassListRoot } from "../../class-list/components/ClassListRoot";
import { Card } from "../../theme/components/Card";
import { NavbarProvider } from "../components/NavbarProvider";
import { Paths } from "./paths";

const ComingSoonWrapper = styled.div`
  max-width: 960px;
  padding: 1em;
  margin: 0 auto;
`;

const ComingSoon = () => {
  return (
    <NavbarProvider>
      <ComingSoonWrapper>
        <Card>
          <h1>Coming Soon</h1>
          <p>We're still working on this feature. Please bear with us!</p>
        </Card>
      </ComingSoonWrapper>
    </NavbarProvider>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={Paths.CLASS_LIST} element={<ClassListRoot />} />
      <Route path={Paths.SIGN_IN} element={<ComingSoon />} />
      <Route path={Paths.ABOUT} element={<AboutRoot />} />
      <Route
        path="*"
        element={<Navigate to={Paths.CLASS_LIST} replace={true} />}
      />
    </Route>
  ),
  { basename: process.env.PUBLIC_URL }
);
