// common practice to cap models

import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
    // cuts any empty space before or after string there are many ways to control data going into database
    trim: true,
    // Other controls:  minLength, lowercase,  default(if you try without a name it will set something as default)
  },
});

// caps takes 2 params name of the model and the schema

// check if the board model already exist if not then creat new board Model
export default mongoose.models.Board || mongoose.model("Board", boardSchema);
