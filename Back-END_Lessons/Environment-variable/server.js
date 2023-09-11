import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//console.log(process.env); //Node js environment variables will display
//console.log(app.get("env")); //development

app.get("/login", (req, res) => {
  console.log("this is login page");
});

app.get("/login/:number", (req, res) => {
  const number = req.params.number;
  const result = number / process.env.VALUE;
  res.send(`The result is ${result}`);
});

app.get("/login/square", (req, res) => {
  const result = process.env.VALUE + process.env.VALUE;
  console.log(typeof process.env.VALUE);
  res.send(`Area of Square is':${result}`); //NaN
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening on port ${process.env.PORT}`);
});
