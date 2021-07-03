import asyncHandler from "express-async-handler";
import Activity from "../models/activityModel.js";

// @desc    Get all logged in user activities
// @route   GET /api/activities/myactivities
// @access  Private
const getActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.find({ user: req.user._id });
  res.json(activities);
});

// @desc    Get activity by id
// @route   GET /api/activities/:id
// @access  Private
const getActivityById = asyncHandler(async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (activity) {
    res.json(activity);
  } else {
    res.status(404);
    throw new Error("Activity not found");
  }
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

// @desc    Update activity
// @route   PUT /api/activities/:id
// @access  Private
const updateActivity = asyncHandler(async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (activity) {
    activity.devices = req.body.devices || activity.devices;
    const updatedActivity = await activity.save();
    res.json({
      _id: updatedActivity._id,
      devices: updatedActivity.devices,
    });
  } else {
    res.status(404);
    throw new Error("Activity not found");
  }
});

// @desc    Delete activity
// @route   DELETE/api/activities/:id
// @access  Private
const deleteActivity = asyncHandler(async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  if (activity) {
    await activity.remove();
    res.json({ message: "Activity removed" });
  } else {
    res.status(404);
    throw new Error("Activity not found");
  }
});

export {
  getActivities,
  getActivityById,
  addActivity,
  deleteActivity,
  updateActivity,
};
