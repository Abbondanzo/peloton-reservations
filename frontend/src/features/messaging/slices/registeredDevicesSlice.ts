import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AsyncData } from "../../store/types/AsyncData";
import type { RegisteredDevice } from "../types/RegisteredDevice";

type DevicesMap = { [key: string]: RegisteredDevice };

interface RegisteredDevicesCacheState {
  userId: string | null;
  data: AsyncData<DevicesMap>;
}

const initialState: RegisteredDevicesCacheState = {
  userId: null,
  data: { state: "idle" },
};

const registeredDevicesSlice = createSlice({
  name: "registeredDevices",
  initialState,
  reducers: {
    setRegisteredDevicesLoading(
      _state: RegisteredDevicesCacheState,
      action: PayloadAction<string>
    ): RegisteredDevicesCacheState {
      return { userId: action.payload, data: { state: "loading" } };
    },
    setRegisteredDevicesData(
      _state: RegisteredDevicesCacheState,
      action: PayloadAction<{ userId: string; data: DevicesMap }>
    ): RegisteredDevicesCacheState {
      return {
        userId: action.payload.userId,
        data: { state: "fulfilled", data: action.payload.data },
      };
    },
    setRegisteredDevicesFailed(
      _state: RegisteredDevicesCacheState,
      action: PayloadAction<{ userId: string; error: { message: string } }>
    ): RegisteredDevicesCacheState {
      return {
        userId: action.payload.userId,
        data: { state: "failed", error: action.payload.error },
      };
    },
  },
});

export const {
  setRegisteredDevicesLoading,
  setRegisteredDevicesData,
  setRegisteredDevicesFailed,
} = registeredDevicesSlice.actions;

export default registeredDevicesSlice.reducer;
