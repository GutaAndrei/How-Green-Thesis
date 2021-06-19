import axios from "axios";
import {
  DATE_LIST_REQUEST,
  DATE_LIST_SUCCESS,
  DATE_LIST_FAIL,
  DATE_DETAILS_REQUEST,
  DATE_DETAILS_SUCCESS,
  DATE_DETAILS_FAIL,
} from "../constants/dateConstants";

export const listDates = () => async (dispatch) => {
  try {
    dispatch({ type: DATE_LIST_REQUEST });
    const { data } = await axios.get("/api/dates");
    dispatch({
      type: DATE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDateDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DATE_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/dates/${id}`);
    dispatch({
      type: DATE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
