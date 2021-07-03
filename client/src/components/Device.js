import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import {
  faClock,
  faEdit,
  faLightbulb,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { deleteDevice } from "../actions/deviceActions";

const Device = ({ device }) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteDevice(id));
    }
  };

  return (
    <Card className="my-3 p-2 text-center">
      <Card.Body>
        <Card.Title as="h2">
          <strong>{device.name}</strong>
        </Card.Title>
        <Card.Text as="h6">
          <FontAwesomeIcon icon={faLightbulb} /> Wattage: {device.watts}W
        </Card.Text>
        <Card.Text as="h6">
          <FontAwesomeIcon icon={faClock} /> Hours of use: {device.hours}H
        </Card.Text>
        <Row style={{ justifyContent: "space-between" }}>
          <Button href={`/device/${device._id}`} variant="info">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>
          <Button onClick={() => deleteHandler(device._id)} variant="danger">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Device;
