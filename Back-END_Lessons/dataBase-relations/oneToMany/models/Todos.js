import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const toDoSchema = new Schema({
  title: String,
  done: Boolean,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Todo = model("Todo", toDoSchema);

export default Todo;
