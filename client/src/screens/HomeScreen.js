import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup } from "react-bootstrap";

import Message from "../components/Message";
import ConsumptionChart from "../components/ConsumptionChart";

let maxDevices = [];

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();

  const activityList = useSelector((state) => state.activityList);
  const { loading, error, activities } = activityList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) history.push("/login");
  }, [dispatch, history, userInfo]);

  if (activities) {
    for (let i = 0; i < activities.length; i++) {
      let activityDevices = activities[i].devices;
      for (let j = 0; j < activityDevices.length; j++) {
        const device = [activityDevices[j].name, activityDevices[j].watts];
        if (maxDevices.some((item) => item[0] === device[0])) {
          const existingDevice =
            maxDevices[maxDevices.findIndex((item) => item[0] === device[0])];
          maxDevices = maxDevices.slice(
            maxDevices.findIndex((item) => item[0] === device[0])
          );
          const w1 = existingDevice[1];
          const w2 = device[1];
          maxDevices.push([existingDevice[0], w1 + w2]);
        } else {
          maxDevices.push(device);
        }
      }
    }
  }
  console.log("unsorted", maxDevices);
  maxDevices = maxDevices.sort((a, b) =>
    a[1] < b[1] ? -1 : b[1] > a[1] ? 1 : 0
  );
  console.log("sorted", maxDevices);
  const data = [["Device", "Hours used"], ...maxDevices];
  return (
    <>
      {error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col>
            <ConsumptionChart devices={data} />
          </Col>
          <Col>
            <h2>Top 5 devices from activities</h2>
            <ListGroup>
              {maxDevices.reverse().map((device) => (
                <ListGroup.Item key={device}>
                  {device[0] + " - " + device[1] + " W"}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
