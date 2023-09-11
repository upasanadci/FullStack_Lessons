import express from "express";
import mongoose from "mongoose";
import Fakedata from "./models/fakedata.js";
import { faker } from "@faker-js/faker";
import customerRoute from "./routes/customer.js";
import fakedataRoute from "./routes/fakedata.js";

const app = express();
app.use(express.json());
app.use("/customer", customerRoute);
app.use("/fakedata", fakedataRoute);

mongoose
  .connect("mongodb://localhost:27017/DCIdb")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

/////////////////////////////////////////////////////////////////
// generate some fake data

app.get("/fakedata", (req, res) => {
  const jobdata = [];
  for (let i = 0; i <= 50; i++) {
    const data = faker.person.lastName();
    console.log("fake data is:", data);
    jobdata.push(data);
  }

  res.json({ lastName: jobdata });
});

app.post("/fakedata/create/:count", (req, res) => {
  // const { count } = req.params;
  const detail = [];
  for (let i = 1; i <= count; i++) {
    const newData = new Fakedata({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      jobArea: faker.person.jobArea(),
      jobTitle: faker.person.jobTitle(),
    });
    newData.save();
    detail.push(newData);
  }

  console.log("new data is:", detail);
  res.json({ detail });
});

app.listen(4003, (req, res) => {
  console.log("listening on port 4003");
});
