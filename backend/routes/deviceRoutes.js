import express from "express";
const router = express.Router();
import { getDeviceById, getDevices } from "../controllers/deviceController.js";

router.route("/").get(getDevices);

router.route("/:id").get(getDeviceById);

export default router;
