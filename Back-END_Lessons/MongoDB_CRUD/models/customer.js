import { Schema, model } from "mongoose";

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
});

const Customer = model("Customer", customerSchema);
export default Customer;
