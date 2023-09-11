import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoute from "./routes/loginRoute.js";
import registerRoute from "./routes/registerRoute.js";
import mainpageRoute from "./routes/mainpageRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/mainpage", mainpageRoute);

mongoose
  .connect("mongodb://localhost:27017/loginformDB")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

app.listen(5000, (req, res) => {
  console.log("listening on port 5000");
});
