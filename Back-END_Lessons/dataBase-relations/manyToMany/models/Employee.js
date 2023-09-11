import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    firstName: { type: String, required: true }, // required => it's not gonna create a new entry in the database if firstName is missing
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // unique => we cannot have the same email twice in the database
    salary: { type: Number, default: 2000 }, // default => even if i don't give a number for salary it will add automatically 2000
    // projects : [{type : mongoose.Types.ObjectId , ref : "Project"}]
  },
  {
    versionKey: false,
  }
);

const Employee = model("Employee", employeeSchema);

export default Employee;
