import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //console.log(process.env.MONGO_URI); undefined
    const conn = await mongoose.connect(
      "mongodb+srv://Andrei_Guta:test1234@how-green-thesis.wjqmn.mongodb.net/HowGreen",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB();
