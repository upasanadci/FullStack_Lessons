// npm init -y => initialize my project and create the package.json

// npm install express => install express

import express from "express";

// declare my server
const app = express();
// declare my port
const port = 5000;

// CRUD methods => create, read, update,delete
// app.get(path , controller function) => get is for reading data

app.get("/", (req, res) => {
  res.send("Hello from port 5000");
});

app.get("/cat", (req, res) => {
  res.send(
    `<img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" width=500/> `
  );
});

app.get("/year", (req, res) => {
  const currentDate = new Date();
  console.log(currentDate);
  const year = currentDate.getFullYear();
  // body, header, status
  res.send(year.toString()); // number are read as status code. I cannot send a number as a response

  // alternative
  // res.send(`<h1>${year}</h1>`)
});

// request.params , params refers to a dynamic path that my request can have

app.get("/permission/:old", (req, res) => {
  console.log(req.params);

  const { old } = req.params;

  console.log(old);

  if (old < 18) {
    res.send("sorry you are too young")
  } else {
    res.send("you are fine, you can move on")
  }
});


app.listen(port, () => {
  console.log(`My server is running on port ${port}`);
});
