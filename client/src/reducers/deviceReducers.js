import {
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
  DEVICE_LIST_FAIL,
  DEVICE_DETAILS_REQUEST,
  DEVICE_DETAILS_SUCCESS,
  DEVICE_DETAILS_FAIL,
  DEVICE_DELETE_REQUEST,
  DEVICE_DELETE_SUCCESS,
  DEVICE_DELETE_FAIL,
  DEVICE_ADD_REQUEST,
  DEVICE_ADD_SUCCESS,
  DEVICE_ADD_FAIL,
  DEVICE_UPDATE_REQUEST,
  DEVICE_UPDATE_SUCCESS,
  DEVICE_UPDATE_FAIL,
} from "../constants/deviceConstants";

export const deviceListReducer = (state = { devices: [] }, action) => {
  switch (action.type) {
    case DEVICE_LIST_REQUEST:
      return { loading: true };
    case DEVICE_LIST_SUCCESS:
      return { loading: false, devices: action.payload };
    case DEVICE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deviceDetailsReducer = (state = { device: {} }, action) => {
  switch (action.type) {
    case DEVICE_DETAILS_REQUEST:
      return { loading: true, ...state };
    case DEVICE_DETAILS_SUCCESS:
      return { loading: false, device: action.payload };
    case DEVICE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deviceUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case DEVICE_UPDATE_REQUEST:
      return { loading: true };
    case DEVICE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case DEVICE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deviceAddReducer = (state = {}, action) => {
  switch (action.type) {
    case DEVICE_ADD_REQUEST:
      return { loading: true };
    case DEVICE_ADD_SUCCESS:
      return { loading: false, success: true, device: action.payload };
    case DEVICE_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deviceDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DEVICE_DELETE_REQUEST:
      return { loading: true };
    case DEVICE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DEVICE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
