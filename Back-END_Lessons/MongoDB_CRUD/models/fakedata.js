import { Schema, model } from "mongoose";

const fakeSchema = new Schema({
  firstName: String,
  lastName: String,
  jobTitle: String,
  jobArea: String,
});

const Fakedata = model("Fakedata", fakeSchema);
export default Fakedata;
