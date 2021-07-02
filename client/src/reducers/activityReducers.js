import {
  ACTIVITY_ADD_DEVICE,
  ACTIVITY_LIST_FAIL,
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_REMOVE_DEVICE,
} from "../constants/activityConstants";

// export const activityReducer = (state = { devices: [] }, action) => {
//   switch (action.type) {
//     case ACTIVITY_ADD_DEVICE:
//       const device = action.payload;
//       const existDevice = state.devices.find((x) => x.device === device.device);
//       if (existDevice) {
//         return {
//           ...state,
//           devices: state.devices.map((x) =>
//             x.device === existDevice.device ? device : x
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           devices: [...state.devices, device],
//         };
//       }
//     default:
//       return state;
//   }
// };

export const activityListReducer = (state = { activities: [] }, action) => {
  switch (action.type) {
    case ACTIVITY_LIST_REQUEST:
      return { loading: true };
    case ACTIVITY_LIST_SUCCESS:
      return { loading: false, activities: action.payload };
    case ACTIVITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
