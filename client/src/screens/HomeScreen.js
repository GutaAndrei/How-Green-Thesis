import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Row, Col, Button } from "react-bootstrap";
import { listDevices } from "../actions/deviceActions";
import { listActivities } from "../actions/activityActions";
import ConsumptionChart from "../components/ConsumptionChart";

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) history.push("/login");
  }, [dispatch, history, userInfo]);

  return (
    <Row>
      <Col>
        <ConsumptionChart />
      </Col>
      <Col></Col>
    </Row>
  );
};

export default HomeScreen;
