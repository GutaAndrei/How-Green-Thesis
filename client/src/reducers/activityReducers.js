import {
  ACTIVITY_ADD_DEVICES_FAIL,
  ACTIVITY_ADD_DEVICES_REQUEST,
  ACTIVITY_ADD_DEVICES_SUCCESS,
  ACTIVITY_DELETE_FAIL,
  ACTIVITY_DELETE_REQUEST,
  ACTIVITY_DELETE_SUCCESS,
  ACTIVITY_DETAILS_FAIL,
  ACTIVITY_DETAILS_REQUEST,
  ACTIVITY_DETAILS_SUCCESS,
  ACTIVITY_LIST_FAIL,
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_UPDATE_FAIL,
  ACTIVITY_UPDATE_REQUEST,
  ACTIVITY_UPDATE_SUCCESS,
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

export const activityDetailsReducer = (state = { activity: {} }, action) => {
  switch (action.type) {
    case ACTIVITY_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ACTIVITY_DETAILS_SUCCESS:
      return { loading: false, activity: action.payload };
    case ACTIVITY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
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

export const activityUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIVITY_UPDATE_REQUEST:
      return { loading: true };
    case ACTIVITY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ACTIVITY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const activityDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIVITY_DELETE_REQUEST:
      return { loading: true };
    case ACTIVITY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ACTIVITY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
