import { Schema, model } from "mongoose";

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  city: String,
  zipCode: Number,
});

const Person = model("Person", personSchema);
export default Person;
