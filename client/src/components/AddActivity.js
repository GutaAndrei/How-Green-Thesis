import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Card, Container } from "react-bootstrap";

import { listDevices } from "../actions/deviceActions";

const AddActivity = () => {
  const dispatch = useDispatch();

  const addActivityHandler = () => {};

  const deviceList = useSelector((state) => state.deviceList);
  const { loading, error, devices } = deviceList;

  useEffect(() => {
    dispatch(listDevices());
  }, [dispatch]);

  return (
    <Container className="vh-100">
      <Card className="m-4 p-2">
        <Card.Body>
          <Form>
            <Form.Group controlId="formSelectDevice">
              <Form.Label as="h3">Select Device</Form.Label>
              <Form.Control as="select" defaultValue="Choose Device">
                {devices.map((device) => (
                  <option>{device.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button
              onSubmit={addActivityHandler}
              variant="primary"
              type="submit"
            >
              <i className="fas fa-check"></i> Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddActivity;
