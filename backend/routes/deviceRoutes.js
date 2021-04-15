import express from "express";
import asyncHandler from "express-async-handler";
import Device from "../models/deviceModel.js";
const router = express.Router();

// @desc    Fetch all devices
// @route   Get /api/devices
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const devices = await Device.find({});
    res.json(devices);
  })
);

// @desc    Fetch single device
// @route   Get /api/devices/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const device = await Device.findById(req.params.id);
    if (device) {
      res.json(device);
    } else {
      res.status(404);
      throw new Error("Device not found");
    }
  })
);

export default router;
