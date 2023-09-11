import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import todoRoute from "./routes/todosRoute.js";

const app = express();
app.use(express.json());

//Routes
app.use("/user", userRoute);
app.use("/todo", todoRoute);

const MONGO_URI = "mongodb://localhost/oneToManyFalse";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("database Connected"))
  .catch((err) => console.log("Not connected", err.message));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API started up on http://localhost:${PORT}`);
});
