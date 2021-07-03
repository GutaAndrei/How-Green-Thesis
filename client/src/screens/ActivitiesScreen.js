import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Activity from "../components/Activity";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listActivities } from "../actions/activityActions";

const ActivitiesScreen = ({ history }) => {
  const dispatch = useDispatch();

  const activityList = useSelector((state) => state.activityList);
  const { loading, error, activities } = activityList;

  const activityDelete = useSelector((state) => state.activityDelete);
  const { success } = activityDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      dispatch(listActivities());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, success]);

  return (
    <>
      <h1>Your Activity</h1>
      {activities &&
      activities.find(
        (activity, index) =>
          new Date(activity.date).toDateString() ===
          new Date(Date.now()).toDateString()
      ) ? (
        <Button variant="primary" disabled>
          You already have an entry for today
        </Button>
      ) : (
        <Button href="/activities/add-activity" variant="primary">
          Add devices for today
        </Button>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : activities.length ? (
        <Row>
          {activities.map((activity) => (
            <Col key={activity._id} sm={14} md={7} lg={5} xl={4}>
              <Activity activity={activity} />
            </Col>
          ))}
        </Row>
      ) : (
        <Message variant="info">You have no registered activities</Message>
      )}
    </>
  );
};

export default ActivitiesScreen;
