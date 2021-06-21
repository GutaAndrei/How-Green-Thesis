import axios from "axios";
import {
  DEVICE_ADD_FAIL,
  DEVICE_ADD_REQUEST,
  DEVICE_ADD_SUCCESS,
  DEVICE_DELETE_FAIL,
  DEVICE_DELETE_REQUEST,
  DEVICE_DELETE_SUCCESS,
  DEVICE_DETAILS_FAIL,
  DEVICE_DETAILS_REQUEST,
  DEVICE_DETAILS_SUCCESS,
  DEVICE_LIST_FAIL,
  DEVICE_LIST_REQUEST,
  DEVICE_LIST_SUCCESS,
  DEVICE_UPDATE_FAIL,
  DEVICE_UPDATE_SUCCESS,
  DEVICE_UPDATE_REQUEST,
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

export const listDeviceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DEVICE_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/devices/${id}`);
    dispatch({
      type: DEVICE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateDevice = (device) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DEVICE_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      heaers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/devices/device`, device, config);
    dispatch({
      type: DEVICE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addDevice = (name, watts, hours) => async (dispatch) => {
  try {
    dispatch({
      type: DEVICE_ADD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/devices",
      { name, watts, hours },
      config
    );
    dispatch({
      type: DEVICE_ADD_SUCCESS,
      payload: data,
    });

    dispatch({
      type: DEVICE_LIST_SUCCESS,
      payload: data,
    });

    localStorage.setItem("devices", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: DEVICE_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteDevice = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DEVICE_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/devices/${id}`, config);

    dispatch({
      type: DEVICE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DEVICE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
