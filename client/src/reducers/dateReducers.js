import {
  DATE_LIST_REQUEST,
  DATE_LIST_SUCCESS,
  DATE_LIST_FAIL,
  DATE_DETAILS_REQUEST,
  DATE_DETAILS_SUCCESS,
  DATE_DETAILS_FAIL,
} from "../constants/dateConstants";

export const dateListReducer = (state = { dates: [] }, action) => {
  switch (action.type) {
    case DATE_LIST_REQUEST:
      return { loading: true, dates: [] };
    case DATE_LIST_SUCCESS:
      return { loading: false, dates: action.payload };
    case DATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const dateDetailsReducer = (state = { date: {} }, action) => {
  switch (action.type) {
    case DATE_DETAILS_REQUEST:
      return { loading: true, dates: [] };
    case DATE_DETAILS_SUCCESS:
      return { loading: false, dates: action.payload };
    case DATE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
