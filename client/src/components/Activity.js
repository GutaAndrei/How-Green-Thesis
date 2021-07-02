import React from "react";
import { Card, Row, Button, ListGroup } from "react-bootstrap";
import "../bootstrap.min.css";
import "./style.css";

const cost = 0.12;
let wattSum = 0;
let hoursTotal = 0;

const Activity = ({ activity }) => {
  const devices = activity.devices;
  const today = new Date(activity.date);
  for (let i = 0; i < devices.length; i++) {
    wattSum += devices[i].watts;
    hoursTotal += devices[i].hours;
  }
  const electrCost = (
    ((wattSum + hoursTotal / 1000) * cost) /
    100
  ).toLocaleString(undefined, {
    maximumFractionDigits: 3,
  });
  return (
    <Card className="my-3 p-2 text-left">
      <Card.Body>
        <Card.Title as="h2">
          <strong>{today.toDateString()}</strong>
        </Card.Title>
        <ListGroup variant="flush">
          {devices.map((device) => (
            <ListGroup.Item key={device._id}>
              {device.name}, {device.hours} hours, {device.watts}W
            </ListGroup.Item>
          ))}
        </ListGroup>
        <br />
        <Card.Text as="h5">
          You have consumed {wattSum}W Today, costing {electrCost}$
        </Card.Text>
        <Row style={{ justifyContent: "space-between" }}>
          <Button href="#" variant="info">
            <i className="fas fa-edit"></i> Edit
          </Button>
          <Button variant="danger">
            <i className="far fa-trash-alt"></i> Delete
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Activity;
