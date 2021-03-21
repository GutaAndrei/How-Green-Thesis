const express = require("express");
const devices = require("./data/devices");

const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.get("/api/devices", (req, res) => {
  res.json(devices);
});

app.get("/api/devices/:id", (req, res) => {
  const device = devices.find((p) => p._id === req.params.id);
  res.json(device);
});

app.listen(5000, console.log("Server running on port 5000"));
