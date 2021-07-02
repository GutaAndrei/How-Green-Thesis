import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getActivities } from "../controllers/activityController.js";
const router = express.Router();

router.route("/myactivities").get(protect, getActivities);
export default router;
