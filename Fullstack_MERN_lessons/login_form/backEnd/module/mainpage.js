import { Schema, model } from "mongoose";

const mainpageSchema = new Schema({
  name: String,

  price: String,
  desc: String,
  image: String,
});

const MainPage = model("mainpage", mainpageSchema);
export default MainPage;
