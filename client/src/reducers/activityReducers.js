import {
  ACTIVITY_ADD_DEVICES_FAIL,
  ACTIVITY_ADD_DEVICES_REQUEST,
  ACTIVITY_ADD_DEVICES_SUCCESS,
  ACTIVITY_LIST_FAIL,
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
} from "../constants/activityConstants";

export const activityAddDevicesReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIVITY_ADD_DEVICES_REQUEST:
      return { loading: true };
    case ACTIVITY_ADD_DEVICES_SUCCESS:
      return { loading: false, success: true, activity: action.payload };
    case ACTIVITY_ADD_DEVICES_FAIL:
      return { loading: false, success: true, error: action.payload };
    default:
      return state;
  }
};

export const activityListReducer = (state = { activities: [] }, action) => {
  switch (action.type) {
    case ACTIVITY_LIST_REQUEST:
      return { loading: true };
    case ACTIVITY_LIST_SUCCESS:
      return { loading: false, success: true, activities: action.payload };
    case ACTIVITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
