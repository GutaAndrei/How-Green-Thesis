import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addActivity,
  getActivities,
} from "../controllers/activityController.js";
const router = express.Router();

router.route("/myactivities").get(protect, getActivities);
router.route("/").post(protect, addActivity);
export default router;
