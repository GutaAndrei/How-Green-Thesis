import asyncHandler from "express-async-handler";
import Device from "../models/deviceModel.js";

// @desc    Fetch all logged in user devices
// @route   GET /api/devices/mydevices
// @access  Private
const getDevices = asyncHandler(async (req, res) => {
  const devices = await Device.find({ user: req.user._id });
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
// @access  Private
const addDevice = asyncHandler(async (req, res) => {
  const { name, watts, hours } = req.body;

  const deviceExists = await Device.findOne({ name, user: req.user._id });
  if (deviceExists) {
    res.status(400);
    throw new Error("Device already exists");
  } else {
    const device = new Device({ name, watts, hours, user: req.user._id });
    const createdDevice = await device.save();
    if (createdDevice) {
      res.status(201).json(createdDevice);
    } else {
      res.status(400);
      throw new Error("Invalid device data");
    }
  }
});

// @desc    Update device
// @route   PUT /api/devices/:id
// @access  Private
const updateDevice = asyncHandler(async (req, res) => {
  const device = await Device.findById(req.params.id);
  if (device) {
    device.name = req.body.name || device.name;
    device.watts = req.body.watts || device.watts;
    device.hours = req.body.hours || device.hours;
    const updatedDevice = await device.save();
    res.json({
      _id: updatedDevice._id,
      name: updatedDevice.name,
      watts: updatedDevice.watts,
      hours: updatedDevice.hours,
    });
  } else {
    res.status(404);
    throw new Error("Device not found");
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

export { getDeviceById, getDevices, deleteDevice, addDevice, updateDevice };
