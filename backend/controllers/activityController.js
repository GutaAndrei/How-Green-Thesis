import asyncHandler from "express-async-handler";
import Activity from "../models/activityModel.js";

// @desc    Get all logged in user activities
// @route   GET /api/activities/myactivities
// @access  Private
const getActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.find({ user: req.user._id });
  res.json(activities);
});

export { getActivities };
