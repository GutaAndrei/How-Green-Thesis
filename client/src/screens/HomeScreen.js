import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Device from "../components/Device";
import { Row, Col } from "react-bootstrap";
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
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
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
