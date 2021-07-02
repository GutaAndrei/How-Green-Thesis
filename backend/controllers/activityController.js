import asyncHandler from "express-async-handler";
import Activity from "../models/activityModel.js";

// @desc    Get all logged in user activities
// @route   GET /api/activities/myactivities
// @access  Private
const getActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.find({ user: req.user._id });
  res.json(activities);
});

// @desc    Create new activity
// @route   POST/api/activities
// @access  Private
const addActivity = asyncHandler(async (req, res) => {
  const devices = req.body;

  const activity = new Activity({ user: req.user._id, devices });
  const createdActivity = await activity.save();
  if (createdActivity) {
    res.status(201).json(createdActivity);
  } else {
    res.status(400);
    throw new Error("Invalid activity data");
  }
});

export { getActivities, addActivity };
