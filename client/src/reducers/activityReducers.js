import {
  ACTIVITY_ADD_DEVICE,
  ACTIVITY_REMOVE_DEVICE,
} from "../constants/activityConstants";

export const activityReducer = (state = { devices: [] }, action) => {
  switch (action.type) {
    case ACTIVITY_ADD_DEVICE:
      const device = action.payload;

      const existDevice = state.devices.find((x) => x.device === device.device);

      if (existDevice) {
        return {
          ...state,
          devices: state.devices.map((x) =>
            x.device === existDevice.device ? device : x
          ),
        };
      } else {
        return {
          ...state,
          devices: [...state.devices, device],
        };
      }
    default:
      return state;
  }
};
