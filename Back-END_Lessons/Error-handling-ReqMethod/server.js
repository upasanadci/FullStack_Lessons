const express = require("express");
const app = express();
const { v4 } = require("uuid");
const errorHandler = require("./middleware/errorHandle");
const handleError = require("./utlis/handleError");

app.use(express.json());

const user = [
  { id: 1, userName: "Riccardo", userAge: 24, userGoal: "Frontend Developer" },
  { id: 2, userName: "Sasha", userAge: 23, userGoal: "Fullstack Developer" },
  { id: 3, userName: "Netta", userAge: 25, userGoal: "Fullstack Developer" },
];

app.get("/user", (req, res) => {
  res.json({ user });
  //res.status(200).json({ success: true });
});

//get the data with id

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const data = user.find((item) => item.id == id);
  console.log(id, data);
  res.send(data);
});

//POST Method

app.post("/user/post", (req, res) => {
  const newData = { ...req.body, id: v4() };
  user.push(newData);
  res.json({ user });
});

//Put Method:-Update the data (CRUD)
//POST:- Create     C
//GET:- Read        R
//PUT:- Update      U
//DELETE:- Delete   D

app.put("/user/put/:id", (req, res) => {
  const updtUser = req.body;
  const found = user.find((item) => item.id == req.params.id);
  console.log(updtUser, found);
  try {
    if (found) {
      if (updtUser.userName) {
        found.userName = updtUser.userName;
      }
      if (updtUser.userAge) {
        found.userAge = updtUser.userAge;
      }
      if (updtUser.userGoal) {
        found.userGoal = updtUser.userGoal;
      }
    } else {
      throw new Error("Id is not correct", {
        cause: { userId: req.params.id },
      });
      //next(error);
      //res.json({ success: false });
    }
  } catch (error) {
    //next(error);
    handleError(error, res);
  }
  res.send({ user });
});
//app.use(errorHandler);
//delete method

app.delete("/user/delete/:id", (req, res) => {
  const found = user.findIndex((item) => item.id == req.params.id);
  console.log(found);
  if (found > 0) {
    user.splice(found, 1);
  } else {
    res.json({ success: false, error: "index is 0" });
  }
  res.send({ user });
});

app.listen(6001, (req, res) => {
  console.log("Listening on port 6001");
});

//<---------------------------------------------------------------------->

//Error Handling:-
//1. Programmer Error
//examples:-Syntax Error,Type Error,["mango","Apple"](Array index out of bound)

//2. Operational Error:-
// Occure during runtime,File not found(404)
// Methods:-
// 1.try-catch
// 2.Promises

const getPerson = () => undefined;

app.get("/test", (req, res, next) => {
  //const name = person.name; programmer error
  //["sdasd","asdfewdqw"]
  const name = getPerson();
  try {
    if (!name) {
      throw new Error("person is not defined");
    }
  } catch (error) {
    next(error);
    //res.send({ success: false, error: "person not defined" });
  }
  //res.json({ success: true });
});
