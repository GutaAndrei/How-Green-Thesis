import React from "react";
import { Card, Row, Button, ListGroup } from "react-bootstrap";
import "../bootstrap.min.css";
import "./style.css";

const cost = 0.12;

const Activity = ({ date }) => {
  const today = new Date(date.date);
  const wattSum = date.devices.reduce((a, b) => a.watts + b.watts);
  const hoursTotal = date.devices.reduce((a, b) => a.hours + b.hours);
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
          {date.devices.map((device) => (
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
