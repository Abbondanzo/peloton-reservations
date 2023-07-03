import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { ClassListRoot } from "../../class-list/components/ClassListRoot";
import { SignInRoot } from "../../session/components/SignInRoot";
import { Paths } from "./paths";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Navigate to={Paths.CLASS_LIST} replace={true} />}
      />
      <Route path={Paths.CLASS_LIST} element={<ClassListRoot />} />
      <Route path={Paths.SIGN_IN} element={<SignInRoot />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Route>
  )
);
