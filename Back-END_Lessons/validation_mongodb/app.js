import express from "express";
import { query, validationResult, body, check } from "express-validator";
import mongoose from "mongoose";
import User from "./models/user.js";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/validateDB")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get(
  "/hello",
  query("person").notEmpty().withMessage("field should not be empty").escape(),
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.send(`hello ${req.query.person}`);
    }
    res.send({ errors: result.array() });
  }
);

app.post(
  "/register",
  body("username").notEmpty().withMessage("username is required"),
  body("password")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("password not valid"),
  (req, res) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
      return res.sendStatus(201);
    }
    res.send({ error: error.array() });
  }
);

app.post(
  "/formregister",
  check("username").notEmpty().withMessage("username should not be empty"),
  check("password").notEmpty().withMessage("password should not be empty"),
  check("password")
    .isLength({ min: 5 })
    .matches(/\d/)
    .withMessage("password not valid"),
  check("email").notEmpty().withMessage("email required"),
  check("email").isEmail().withMessage("email is not valid"),
  check("confirmpassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("password did not match"),
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.send({ error: error.array() });
    }
    // return res.sendStatus(201);
    User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      confirmpassword: req.body.confirmpassword,
    }).then((data) => res.send({ data }));
  }
);

app.listen(4002, (req, res) => {
  console.log("listening on port 4002");
});
