import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import axios from "axios";

const DeviceScreen = ({ match }) => {
  const [device, setDevice] = useState([]);
  useEffect(() => {
    const fetchDevice = async () => {
      const { data } = await axios.get(`/api/devices/${match.params.id}`);
      setDevice(data);
    };

    fetchDevice();
  }, [match]);
  return (
    <Container className="vh-100">
      <Card className="m-4 p-2">
        <Card.Body>
          <Form>
            <Form.Group controlId="formDeviceName">
              <Form.Label as="h3">Device Name</Form.Label>
              <Form.Control
                autoComplete="off"
                type="text"
                placeholder={device.name}
              />
            </Form.Group>
            <Form.Group controlId="formWattage">
              <Form.Label as="h3">
                <i className="fas fa-bolt"></i> Watts
              </Form.Label>
              <Form.Control
                autoComplete="off"
                type="text"
                placeholder={device.watts}
              />
            </Form.Group>
            <Form.Group controlId="formHours">
              <Form.Label as="h3">
                <i className="far fa-clock"></i> Hours of use
              </Form.Label>
              <Form.Control
                autoComplete="off"
                type="text"
                placeholder={device.hours}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              <i className="fas fa-check"></i> Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DeviceScreen;
