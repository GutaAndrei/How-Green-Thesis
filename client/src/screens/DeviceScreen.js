import React, { useEffect } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listDeviceDetails } from "../actions/deviceActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const DeviceScreen = ({ match }) => {
  const dispatch = useDispatch();

  const deviceDetails = useSelector((state) => state.deviceDetails);
  const { loading, error, device } = deviceDetails;

  useEffect(() => {
    dispatch(listDeviceDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <Container className="vh-100">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
              <Button variant="primary" type="submit">
                <i className="fas fa-check"></i> Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default DeviceScreen;
