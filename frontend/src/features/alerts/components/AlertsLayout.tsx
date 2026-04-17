import { Outlet } from "react-router-dom";
import { RegisteredDevicesProvider } from "../../messaging/providers/RegisteredDevicesProvider";
import { AlertPreferencesProvider } from "../providers/AlertPreferencesProvider";
import { AlertsProvider } from "../providers/AlertsProvider";
import { SharedRoot } from "./SharedRoot";

const AlertsLayoutBody = ({ userId }: { userId: string }) => (
  <AlertsProvider userId={userId}>
    <AlertPreferencesProvider userId={userId}>
      <RegisteredDevicesProvider userId={userId}>
        <Outlet />
      </RegisteredDevicesProvider>
    </AlertPreferencesProvider>
  </AlertsProvider>
);

export const AlertsLayout = () => (
  <SharedRoot>{(userId) => <AlertsLayoutBody userId={userId} />}</SharedRoot>
);
