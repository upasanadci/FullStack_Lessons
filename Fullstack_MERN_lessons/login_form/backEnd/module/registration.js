import { Schema, model } from "mongoose";

const registerSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const Register = model("register", registerSchema);
export default Register;
