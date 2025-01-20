import "dotenv/config";
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};
