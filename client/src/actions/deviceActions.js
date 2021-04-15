import axios from "axios";
import {
  DEVICE_LIST_FAIL,
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
} from "../constants/deviceConstants";

export const listDevices = () => async (dispatch) => {
  try {
    dispatch({ type: DEVICE_LIST_REQUEST });
    const { data } = await axios.get("/api/devices");
    dispatch({
      type: DEVICE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
