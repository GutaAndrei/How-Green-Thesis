import express from "express";
import asyncHandler from "express-async-handler";
import DeviceDate from "../models/dateModel.js";
const router = express.Router();

// @desc    Fetch all dates
// @route   Get /api/dates
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const dates = await DeviceDate.find({});
    res.json(dates);
  })
);
// @desc    Fetch single date
// @route   Get /api/dates
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const date = await DeviceDate.findById(req.params.id);
    if (date) {
      res.json(date);
    } else {
      res.status(404);
      throw new Error("Date not found");
    }
  })
);

export default router;
