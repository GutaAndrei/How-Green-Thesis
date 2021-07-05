import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
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
        if (maxDevices[activityDevices[j].name]) {
          maxDevices[activityDevices[j].watts] += activityDevices[j].watts;
        } else {
          maxDevices.push([activityDevices[j].name, activityDevices[j].watts]);
        }
      }
    }
  }

  maxDevices
    .sort((a, b) => (a.watts < b.watts ? -1 : b.watts > a.watts ? 1 : 0))
    .slice(0, 5);

  const data = [["Device", "Hours used"], ...maxDevices];

  return (
    <>
      {error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col>
            <ConsumptionChart />
          </Col>
          <Col>
            <h2>Top 5 devices from activities</h2>
            <ListGroup>
              {maxDevices.reverse().map((device) => (
                <ListGroup.Item key={device}>
                  {device[0] + " - " + device[1] + "W"}
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
