import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { addDevice } from "../actions/deviceActions";

const DeviceAddScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [watts, setWatts] = useState(0);
  const [hours, setHours] = useState(0);

  const deviceAdd = useSelector((state) => state.deviceAdd);
  const { loading, success, error, device } = deviceAdd;

  useEffect(() => {
    if (success) {
      history.push("/devices/mydevices");
    }
  }, [history, device, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addDevice(name, watts, hours));
  };

  return (
    <FormContainer>
      <h1>Add Device</h1>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Device Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="watts">
          <Form.Label>Watts</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter watts"
            value={watts}
            onChange={(e) => setWatts(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="hours">
          <Form.Label>Hours</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default DeviceAddScreen;
