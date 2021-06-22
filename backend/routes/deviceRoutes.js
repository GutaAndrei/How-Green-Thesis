import express from "express";

const router = express.Router();
import {
  getDeviceById,
  getDevices,
  deleteDevice,
  addDevice,
} from "../controllers/deviceController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addDevice);
router.route("/mydevices").get(protect, getDevices);

router.route("/:id").get(protect, getDeviceById).delete(protect, deleteDevice);

export default router;
