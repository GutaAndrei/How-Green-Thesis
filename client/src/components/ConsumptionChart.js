import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";

import Message from "./Message";
import { listDevices } from "../actions/deviceActions";
import { listActivities } from "../actions/activityActions";

let maxDevices = [];

export const ConsumptionChart = () => {
  const dispatch = useDispatch();

  const activityList = useSelector((state) => state.activityList);
  const {
    loading: activityListLoading,
    error: activityLisyError,
    activities,
  } = activityList;

  useEffect(() => {
    dispatch(listDevices());
    dispatch(listActivities());
  }, [dispatch]);

  if (activities) {
    for (let i = 0; i < activities.length; i++) {
      let activityDevices = activities[i].devices;
      for (let j = 0; j < activityDevices.length; j++) {
        if (maxDevices[activityDevices[j].name]) {
          maxDevices[activityDevices[j].watts] += activityDevices[j].watts;
        } else {
          maxDevices.push({
            name: activityDevices[j].name,
            watts: activityDevices[j].watts,
          });
        }
      }
    }
  }

  maxDevices
    .sort((a, b) => (a.watts > b.watts ? -1 : b.watts < a.watts ? 1 : 0))
    .slice(0, 5);

  let arr = [];
  for (let key in maxDevices) {
    arr.push([maxDevices[key].name, maxDevices[key].watts]);
  }

  const data = [["Device", "Hours used"], ...arr];
  return (
    <>
      {activities && activities.length ? (
        <Chart
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={data}
          options={{
            title: "Most Used Devices",
          }}
          width={"650px"}
          height={"650px"}
        />
      ) : (
        <Message variant="info">
          There are no activities on your profile. Add an activity to see a
          report of top 5 devices that used the most resources.
        </Message>
      )}
    </>
  );
};

export default ConsumptionChart;
