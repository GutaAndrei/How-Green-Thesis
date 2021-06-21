import asyncHandler from "express-async-handler";
import Device from "../models/deviceModel.js";
import User from "../models/userModel.js";

// @desc    Fetch all devices
// @route   GET /api/devices
// @access  Public
const getDevices = asyncHandler(async (req, res) => {
  const devices = await Device.find({});
  res.json(devices);
});

// @desc    Get single device
// @route   GET /api/devices/:id
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

// @desc    Add a device
// @route   POST /api/devices/
// @access  Public
const addDevice = asyncHandler(async (req, res) => {
  const { name, watts, hours } = req.body;
  const deviceExists = await Device.findOne({ name });
  if (deviceExists) {
    res.status(400);
    throw new Error("Device already exists");
  }

  const device = await Device.create({ name, watts, hours });

  if (device) {
    res.status(201).json({
      _id: device._id,
      name: device.name,
      email: device.email,
      hours: device.hours,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Update device
// @route   PUT /api/devices/device
// @access  Public
const updateDevice = asyncHandler(async (req, res) => {
  const deviceExists = await Device.findOne({ name });
  if (deviceExists) {
    res.status(400);
    throw new Error("Device already exists");
  }

  const device = await Device.create({ name, watts, hours });

  if (device) {
    res.status(201).json({
      _id: device._id,
      name: device.name,
      email: device.email,
      hours: device.hours,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Delete device
// @route   DELETE/api/devices/:id
// @access  Private
const deleteDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id);
  if (device) {
    await device.remove();
    res.json({ message: "Device Removed" });
  } else {
    res.status(404);
    throw new Error("Device not found");
  }
});

export { getDeviceById, getDevices, deleteDevice, addDevice };
