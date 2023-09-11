import express from "express";
import mongoose from "mongoose";
import employeeRouter from "./routes/employeeRoute.js"
import projectRouter from "./routes/projectRoute.js"
import projectEmployeeRouter from "./routes/projectEmployeeRoute.js" 

const app = express();
app.use(express.json());

//Routes
app.use("/employee" , employeeRouter);
app.use("/project" , projectRouter)
app.use("/projectEmployee" , projectEmployeeRouter);


const MONGO_URI = "mongodb://localhost/manyToMany";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("database Connected"))
  .catch((err) => console.log("Not connected", err.message));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API started up on http://localhost:${PORT}`);
});
