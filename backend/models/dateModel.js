import mongoose from "mongoose";

const deviceDateSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    devices: [
      {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        ref: "Device",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const DeviceDate = mongoose.model("DeviceDate", deviceDateSchema);

export default DeviceDate;
