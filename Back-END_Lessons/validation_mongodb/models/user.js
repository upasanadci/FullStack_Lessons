import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: String,
  email: String,
  confirmpassword: String,
});

const User = model("User", userSchema);
export default User;
