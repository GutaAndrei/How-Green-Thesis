import express from "express";

const router = express.Router();
import {
  getDeviceById,
  getDevices,
  deleteDevice,
  addDevice,
} from "../controllers/deviceController.js";

router.route("/").get(getDevices).post(addDevice);

router.route("/:id").get(getDeviceById).delete(deleteDevice);

export default router;
