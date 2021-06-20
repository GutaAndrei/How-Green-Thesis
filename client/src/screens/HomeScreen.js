import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Device from "../components/Device";
import Message from "../components/Message";
import Loader from "../components/Loader";
import AddDevice from "../components/AddDevice";
import { Row, Col, Button } from "react-bootstrap";
import { listDevices } from "../actions/deviceActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const deviceList = useSelector((state) => state.deviceList);
  const { loading, error, devices } = deviceList;

  useEffect(() => {
    dispatch(listDevices());
  }, [dispatch]);

  return (
    <>
      <h1>Your Devices</h1>
      <Button href={``} variant="warning">
        Add device
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {devices.map((device) => (
            <Col key={device._id} sm={14} md={7} lg={5} xl={3}>
              <Device device={device} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
