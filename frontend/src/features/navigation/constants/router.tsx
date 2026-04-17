import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { AboutRoot } from "../../about/components/AboutRoot";
import { AlertsEditorRoot } from "../../alerts/components/AlertsEditorRoot";
import { AlertsLayout } from "../../alerts/components/AlertsLayout";
import { AlertsRoot } from "../../alerts/components/AlertsRoot";
import { ClassListRoot } from "../../class-list/components/ClassListRoot";
import { AdminRoute } from "../../session/components/AdminRoute";
import { SignInRoot } from "../../session/components/SignInRoot";
import { StatsRoot } from "../../stats/components/StatsRoot";
import { Paths } from "./paths";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route>
      <Route path={Paths.CLASS_LIST} element={<ClassListRoot />} />
      <Route path={Paths.ALERTS} element={<AlertsLayout />}>
        <Route index element={<AlertsRoot />} />
        <Route path="edit" element={<AlertsEditorRoot />} />
      </Route>
      <Route path={Paths.SIGN_IN} element={<SignInRoot />} />
      <Route path={Paths.ABOUT} element={<AboutRoot />} />
      <Route
        path={Paths.STATS}
        element={
          <AdminRoute>
            <StatsRoot />
          </AdminRoute>
        }
      />
      <Route
        path="*"
        element={<Navigate to={Paths.CLASS_LIST} replace={true} />}
      />
    </Route>
  )
);
