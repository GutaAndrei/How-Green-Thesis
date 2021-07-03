import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addActivity,
  deleteActivity,
  getActivities,
  getActivityById,
  updateActivity,
} from "../controllers/activityController.js";
const router = express.Router();

router.route("/myactivities").get(protect, getActivities);
router.route("/").post(protect, addActivity);
router
  .route("/:id")
  .get(protect, getActivityById)
  .delete(protect, deleteActivity)
  .put(protect, updateActivity);
export default router;
