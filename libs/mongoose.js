import mongoose from "mongoose";

// creates connection with the database
// we will keep mongo.js because auth.js needs
export const connectMongo = () => {
  try {
    mongoose.connect(process.env.MONGO_URI)
  } catch (e) {
    console.error("Mongoose Error: " + e.message)
  }
}