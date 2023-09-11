import express from "express";
import mongoose from "mongoose";
import orderRoute from "./routes/orderRoute.js"

const app = express();
app.use(express.json());

//Routes
app.use("/order" , orderRoute)

const MONGO_URI = "mongodb://localhost/oneToOne";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("database Connected"))
  .catch((err) => console.log("Not connected", err.message));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API started up on http://localhost:${PORT}`);
});
