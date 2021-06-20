import axios from "axios";
import { ACTIVITY_ADD_DEVICE } from "../constants/activityConstants";

export const addToActivity = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/devices/${id}`);

  dispatch({
    type: ACTIVITY_ADD_DEVICE,
    payload: {
      device: data._id,
      name: data.name,
      hours: data.hours,
      watts: data.hours,
    },
  });

  localStorage.setItem("devices", JSON.stringify(getState().activity.devices));
};
