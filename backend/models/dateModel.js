import mongoose from "mongoose";

const activitySchema = mongoose.Schema(
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
        name: { type: String, required: true },
        watts: { type: Number, required: true },
        hours: { type: Number, required: true },
        device: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Device",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
