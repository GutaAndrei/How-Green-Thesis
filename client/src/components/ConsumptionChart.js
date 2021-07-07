import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";

import Message from "./Message";

import { listActivities } from "../actions/activityActions";

export const ConsumptionChart = (data) => {
  const dispatch = useDispatch();

  const activityList = useSelector((state) => state.activityList);
  const { activities } = activityList;

  useEffect(() => {
    dispatch(listActivities());
  }, [dispatch]);
  return (
    <>
      {data.devices.length === 1 ? (
        <Message variant="info">No activity data</Message>
      ) : (
        <Chart
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={data.devices}
          options={{
            title: "Most Used Devices",
          }}
          width="500px"
          height="400px"
        />
      )}
    </>
  );
};

export default ConsumptionChart;
