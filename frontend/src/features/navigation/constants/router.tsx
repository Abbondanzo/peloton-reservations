import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { AboutRoot } from "../../about/components/AboutRoot";
import { ClassListRoot } from "../../class-list/components/ClassListRoot";
import { SignInRoot } from "../../session/components/SignInRoot";
import { Paths } from "./paths";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path={Paths.CLASS_LIST} element={<ClassListRoot />} />
      <Route path={Paths.SIGN_IN} element={<SignInRoot />} />
      <Route path={Paths.ABOUT} element={<AboutRoot />} />
      <Route
        path="*"
        element={<Navigate to={Paths.CLASS_LIST} replace={true} />}
      />
    </Route>
  )
);
