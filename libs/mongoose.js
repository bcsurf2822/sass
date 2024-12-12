import mongoose from "mongoose";

// this can assist with having error with mongoose
import User from "@/Models/User";
import Board from "@/Models/Board";

// creates connection with the database
// we will keep mongo.js because auth.js needs
export const connectMongo = () => {
  try {
    mongoose.connect(process.env.MONGO_URI)
  } catch (e) {
    console.error("Mongoose Error: " + e.message)
  }
}