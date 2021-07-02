import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { updateDevice, listDeviceDetails } from "../actions/deviceActions";

const DeviceEditScreen = ({ match, history }) => {
  const deviceId = match.params.id;
  const [name, setName] = useState("");
  const [watts, setWatts] = useState(0);
  const [hours, setHours] = useState(false);

  const dispatch = useDispatch();

  const deviceDetails = useSelector((state) => state.deviceDetails);
  const { loading, error, device } = deviceDetails;

  const deviceUpdate = useSelector((state) => state.deviceUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = deviceUpdate;

  useEffect(() => {
    if (successUpdate) {
      history.push("/devices/mydevices");
    } else {
      if (!device.name || device._id !== deviceId) {
        dispatch(listDeviceDetails(deviceId));
      } else {
        setName(device.name);
        setWatts(device.watts);
        setHours(device.hours);
      }
    }
  }, [dispatch, history, device, deviceId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateDevice({ _id: deviceId, name, watts, hours }));
  };

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Device</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="warning">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="watts">
              <Form.Label>Watts</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Watts"
                value={watts}
                onChange={(e) => setWatts(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="hours">
              <Form.Label>Hours</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default DeviceEditScreen;
