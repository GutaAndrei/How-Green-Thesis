import axios from "axios";
import {
  ACTIVITY_ADD_DEVICES_FAIL,
  ACTIVITY_ADD_DEVICES_REQUEST,
  ACTIVITY_ADD_DEVICES_SUCCESS,
  ACTIVITY_LIST_FAIL,
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
} from "../constants/activityConstants";

export const listActivities = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ACTIVITY_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/activities/myactivities", config);

    dispatch({
      type: ACTIVITY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTIVITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addActivity = (devices) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ACTIVITY_ADD_DEVICES_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/activities/", devices, config);

    dispatch({
      type: ACTIVITY_ADD_DEVICES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTIVITY_ADD_DEVICES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
