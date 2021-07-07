import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listDevices } from "../actions/deviceActions";
import { addActivity } from "../actions/activityActions";

const DeviceAddScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [devicesArray, setDevicesArray] = useState([]);

  const deviceList = useSelector((state) => state.deviceList);
  const { loading, error, devices } = deviceList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const activityAddDevices = useSelector((state) => state.activityAddDevices);
  const { error: activityAddError, success } = activityAddDevices;

  useEffect(() => {
    if (userInfo) {
      dispatch(listDevices());
    } else {
      history.push("/login");
    }
    if (success) {
      history.push("/activities/myactivities");
    }
  }, [dispatch, history, userInfo, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addActivity(devicesArray));
  };

  return (
    <FormContainer>
      <h1>Add devices for today</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : devices.length ? (
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="devices">
            <Form.Label>Select Devices</Form.Label>
            {devices &&
              devices.map((device) => (
                <Form.Check
                  label={`${device.name}, ${device.watts} W, ${device.hours} H`}
                  onChange={(e) =>
                    setDevicesArray([
                      ...devicesArray,
                      {
                        name: device.name,
                        watts: device.watts,
                        hours: device.hours,
                        device: device._id,
                      },
                    ])
                  }
                ></Form.Check>
              ))}
          </Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      ) : (
        <Message variant="info">
          You have no registered devices in your account
        </Message>
      )}
    </FormContainer>
  );
};

export default DeviceAddScreen;
