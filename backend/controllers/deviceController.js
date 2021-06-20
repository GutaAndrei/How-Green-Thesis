import asyncHandler from "express-async-handler";
import Device from "../models/deviceModel.js";

// @desc    Fetch all devices
// @route   Get /api/devices
// @access  Public
const getDevices = asyncHandler(async (req, res) => {
  const devices = await Device.find({});
  res.json(devices);
});

// @desc    Fetch single device
// @route   Get /api/devices/:id
// @access  Public
const getDeviceById = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id);
  if (device) {
    res.json(device);
  } else {
    res.status(404);
    throw new Error("Device not found");
  }
});

export { getDeviceById, getDevices };
