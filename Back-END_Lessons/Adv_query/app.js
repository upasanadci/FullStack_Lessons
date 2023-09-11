import express from "express";
import mongoose from "mongoose";
import personRoute from "./routes/personRoute.js";
import { faker } from "@faker-js/faker";

const app = express();

app.use(express.json());
app.use("/person", personRoute);

mongoose
  .connect("mongodb://localhost:27017/AdvDB")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, (req, res) => {
  console.log("listening on port 4000");
});
