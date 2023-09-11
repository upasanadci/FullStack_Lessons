import express from "express";
import Person from "../models/person.js";
import { faker } from '@faker-js/faker';

let router = express.Router();

router.get("/", (req, res) => {
  console.log("router is working");
});

router.post("/create", async (req, res) => {
  const newData = await Person.create(
    req.body
    // firstName: faker.person.firstname,
    // lastName: req.body.lastName,
    // age: req.body.age,
    // city: req.body.city,
    // zipCode: req.body.zipCode,
  );
  newData.save();
  console.log("data is:", newData);
  res.json({ newData });
});

router.get("/read", async (req, res) => {
  //const data = await Person.find({ age: { $gte: 23, $lte: 26 } });
  // const data = await Person.where("age").gte(20).lte(28);
  const data = await Person.find().where({ lastName: "marwah" });
  console.log("data is", data);
  res.send(data);
});

router.get("/limitdata", async (req, res) => {
  //limit will show first three data
  const data = await Person.find().limit(3);
  res.send({ data });
});

router.get("/skipdata", async (req, res) => {
  const data = await Person.find().skip(4).limit(2);
  console.log("skipped data is:", data);
  res.send({ data });
});

router.get("/sortdata", async (req, res) => {
  //in sort method (1) means ascending order (-1) ,means descending order
  const data = await Person.find().sort({ city: 1 });
  console.log("data is:", data);
  res.send({ data });
});

router.get("/selectquery", async (req, res) => {
  // in select query (-) or (0) will exclude the data.or (1) will include the data.
  const data = await Person.find().select({
    firstName: 1,
  });
  console.log("selected data is:", data);
  res.send(data);
});

router.get("/ordata", async (req, res) => {
  const data = await Person.find().nor([{ age: 20 }, { city: "Berlin" }]);
  console.log("nor data is:", data);
  res.send({ data });
});

router.get("/finddata", async (req, res) => {
  //const data = await Person.find({ city: ["Berlin", "Munich"] });
  const data = await Person.find().where({ city: "Berlin" }).count();
  console.log("data is:", data);
  res.send({ data });
});

export default router;
