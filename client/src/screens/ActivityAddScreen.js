import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listDevices } from "../actions/deviceActions";

const DeviceAddScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [devicesArray, setDevicesArray] = useState([]);

  const deviceList = useSelector((state) => state.deviceList);
  const { loading, error, devices } = deviceList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listDevices());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <FormContainer>
      <h1>Add devices for today</h1>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="devices">
          <Form.Label>Select Devices</Form.Label>

          {devices &&
            devices.map((device) => (
              <Form.Check
                size="lg"
                value={device._id}
                label={`${device.name}, ${device.watts} W, ${device.hours} H`}
                onChange={(e) => setDevicesArray(e.target.value)}
              ></Form.Check>
            ))}
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default DeviceAddScreen;
