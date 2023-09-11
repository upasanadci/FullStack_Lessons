import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    // employees : [{type : mongoose.Types.ObjectId , ref : "Employee"}]
  },
  {
    versionKey: false,
  }
);

const Project = model("Project", projectSchema);

export default Project;
