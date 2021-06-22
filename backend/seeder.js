import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import devices from "./data/devices.js";
import dates from "./data/dates.js";
import User from "./models/userModel.js";
import Device from "./models/deviceModel.js";
import DeviceDate from "./models/dateModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB;

const importData = async () => {
  try {
    await Device.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleDevices = devices.map((device) => {
      return { ...device, user: adminUser };
    });

    await Device.insertMany(sampleDevices);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Device.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
