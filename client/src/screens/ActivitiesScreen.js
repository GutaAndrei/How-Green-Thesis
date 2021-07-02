import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Activity from "../components/Activity";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listActivities } from "../actions/activityActions";

const ActivitiesScreen = ({ history }) => {
  const dispatch = useDispatch();

  const activitiesList = useSelector((state) => state.activitiesList);
  const { loading, error, activities } = activitiesList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const isTodayAdded = activities.find(
    (activity, index) =>
      new Date(activity.date).toDateString() ===
      new Date(Date.now()).toDateString()
  );
  console.log(activities);
  useEffect(() => {
    if (userInfo) {
      dispatch(listActivities());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <h1>Your Activity</h1>
      {isTodayAdded ? (
        <Button variant="primary" disabled>
          You already have an entry for today
        </Button>
      ) : (
        <Button href={`/activity/add`} variant="primary">
          Add devices for today
        </Button>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : activitiesList === [] ? (
        <Row>
          {activities.map((date) => (
            <Col key={date._id} sm={14} md={7} lg={5} xl={4}>
              <Activity date={date} />
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
