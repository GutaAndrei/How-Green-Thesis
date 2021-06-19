import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    devices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Device",
      },
    ],
    calendar: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "DeviceDate",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
