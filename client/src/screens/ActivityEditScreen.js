import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {
  updateActivity,
  listActivityDetails,
} from "../actions/activityActions";
import { listDevices } from "../actions/deviceActions";

const ActivityEditScreen = ({ match, history }) => {
  const activityId = match.params.id;
  const [devicesArray, setDevicesArray] = useState([]);

  const dispatch = useDispatch();

  const activityDetails = useSelector((state) => state.activityDetails);
  const { loading, error, activity } = activityDetails;

  const activityUpdate = useSelector((state) => state.activityUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = activityUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deviceList = useSelector((state) => state.deviceList);
  const { devices } = deviceList;

  useEffect(() => {
    if (userInfo) {
      dispatch(listDevices());
      if (successUpdate) {
        history.push("/activities/myactivities");
        return;
      } else {
        if (!activity.devices || activity._id !== activityId) {
          dispatch(listActivityDetails(activityId));
        } else {
          setDevicesArray([]);
        }
      }
    } else {
      history.push("/login");
    }
  }, [dispatch, history, activity, activityId, userInfo, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateActivity({ _id: activityId, devices: devicesArray }));
  };

  return (
    <FormContainer>
      <h1>Edit Activity</h1>
      {loadingUpdate && <Loader />}
      {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="warning">{error}</Message>
      ) : (
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
            Update
          </Button>
        </Form>
      )}
    </FormContainer>
  );
};

export default ActivityEditScreen;
