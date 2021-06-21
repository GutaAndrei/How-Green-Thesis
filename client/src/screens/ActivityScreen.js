import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listDates } from "../actions/dateActions";
import AddActivity from "../components/AddActivity";
import Activity from "../components/Activity";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ActivityScreen = () => {
  const dispatch = useDispatch();

  const dateList = useSelector((state) => state.dateList);
  const { loading, error, dates } = dateList;
  const isTodayAdded = dates.find((date, index) => {
    if (
      new Date(date.date).toDateString() === new Date(Date.now()).toDateString()
    )
      return true;
  });
  useEffect(() => {
    dispatch(listDates());
  }, [dispatch]);

  return (
    <>
      <h1>Your Activity</h1>
      {isTodayAdded ? (
        <Button variant="warning" disabled>
          You already have an entry for today
        </Button>
      ) : (
        <Button href={`/activity/add`} variant="warning">
          Add devices for today
        </Button>
      )}

      <Container className="vh-100">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {dates.map((date) => (
              <Col key={date._id} sm={14} md={7} lg={5} xl={4}>
                <Activity date={date} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default ActivityScreen;
