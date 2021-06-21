import React, { useEffect } from "react";
import { Row, Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listDeviceDetails } from "../actions/deviceActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const DeviceScreen = ({ history, match }) => {
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
        <Card className="my-3 p-2">
          <Card.Body>
            <Card.Title as="h1">{device.name}</Card.Title>
            <Card.Text as="h4">Watts: {device.watts}</Card.Text>
            <Card.Text as="h4">Hours of use: {device.hours}</Card.Text>
            <Row style={{ justifyContent: "space-between" }}>
              <Button
                style={{ maxWidth: "300px" }}
                type="button"
                className="btn-block"
                variant="info"
              >
                Edit
              </Button>
              <Button
                style={{ maxWidth: "300px" }}
                type="button"
                className="btn-block"
                variant="danger"
              >
                Delete
              </Button>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default DeviceScreen;
