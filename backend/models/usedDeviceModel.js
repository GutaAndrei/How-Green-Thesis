import mongoose from "mongoose";

const usedDeviceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    device: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Device",
    },
    hours: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const UsedDevice = mongoose.model("UsedDevice", usedDeviceSchema);

export default UsedDevice;
