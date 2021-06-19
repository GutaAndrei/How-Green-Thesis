import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import "../bootstrap.min.css";
import "./style.css";

const Device = ({ device }) => {
  return (
    <Card className="my-3 p-2 text-center">
      <Card.Body>
        <Card.Title as="h2">
          <strong>{device.name}</strong>
        </Card.Title>
        <Card.Text as="h5">
          <i className="fas fa-bolt"></i> Wattage: {device.watts}W
        </Card.Text>
        <Card.Text as="h5">
          <i className="far fa-clock"></i> Hours of use: {device.hours}H
        </Card.Text>
        <Row style={{ justifyContent: "space-between" }}>
          <Button href={`/device/${device._id}`} variant="info">
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

export default Device;
