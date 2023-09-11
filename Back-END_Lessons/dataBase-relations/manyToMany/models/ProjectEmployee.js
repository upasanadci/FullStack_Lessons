import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const projectEmployeeSchema = new Schema(
  {
    project: { type: Schema.Types.ObjectId, ref: "Project" },
    employee: { type: Schema.Types.ObjectId, ref: "Employee" },
  },
  {
    versionKey: false,
  }
);

const ProjectEmployee = model("ProjectEmployee", projectEmployeeSchema);

export default ProjectEmployee;
