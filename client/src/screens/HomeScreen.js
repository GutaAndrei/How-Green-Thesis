import React, { useState, useEffect } from "react";
import Device from "../components/Device";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const HomeScreen = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const { data } = await axios.get("/api/devices");
      setDevices(data);
    };

    fetchDevices();
  }, []);
  return (
    <>
      <h1>Your Devices</h1>
      <Row>
        {devices.map((device) => (
          <Col key={device._id} sm={14} md={7} lg={5} xl={3}>
            <Device device={device} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
