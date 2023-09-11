const express = require("express");
//import express from 'express'
const { v4 } = require("uuid");

const students = [
  { id: "1", name: "Riccardo", city: "Munich" },
  { id: "2", name: "Mads", city: "Berlin" },
  { id: "3", name: "Peculiar", city: "Hamburg" },
];

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  //res.json({ success: true });
  res.json(students);
  console.log("getting data on 5003");
});

app.get("/params", (req, res) => {
  var id = req.query.id;
  var name = req.query.name;
  //res.json({ id, name });
  students.push({ id, name });
  res.send(students);
});

app.post("/data", (req, res) => {
  res.send(`data is posted on postman`);
  console.log("data is posted");
});

app.post("/user/:name", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.send({ error: "name is not defined" });
  }
  res.send(`${name} is destructured`);
  console.log(name);
});

//reject duplicate name
app.post("/getname/:name", (req, res) => {
  // const { name } = req.body;
  // const data = students.find((student) => student.name == name);
  // if (data) {
  //   res.send({ error: "duplicate not allowed" });
  // }
  // //res.send(`${name} is available`);
  // console.log(data, name);

  //create a new data
  const newData = { ...req.body, id: v4(), name: "Netta" };
  students.push(newData);
  res.json(students);
});

app.listen(5003, () => {
  console.log("listening on Port 5003");
});
