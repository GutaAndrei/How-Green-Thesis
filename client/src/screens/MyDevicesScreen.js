import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Device from "../components/Device";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Row, Col, Button } from "react-bootstrap";
import { listDevices } from "../actions/deviceActions";

const MyDevicesScreen = ({ history }) => {
  const dispatch = useDispatch();

  const deviceList = useSelector((state) => state.deviceList);
  const { loading, error, devices } = deviceList;

  const deviceDelete = useSelector((state) => state.deviceDelete);
  const { success: successDelete } = deviceDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listDevices());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  return (
    <>
      <h1>Your Devices</h1>
      <Button href={``} variant="primary">
        Add device
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : deviceList ? (
        <Row>
          {devices.map((device) => (
            <Col key={device._id} sm={14} md={7} lg={5} xl={3}>
              <Device device={device} />
            </Col>
          ))}
        </Row>
      ) : (
        <Message variant="info">You currently don't have any devices</Message>
      )}
    </>
  );
};

export default MyDevicesScreen;
