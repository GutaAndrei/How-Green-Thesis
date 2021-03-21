import React from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import devices from "../devices";

const DeviceScreen = ({ match }) => {
  const device = devices.find((p) => p._id === match.params.id);
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
