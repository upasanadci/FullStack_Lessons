const express = require("express");
const app = express();
var cors = require("cors");
const { products } = require("./data.js");
app.use(express.json());

app.use(cors());

app.get("/api", (req, res) => {
  //res.json({ sucess: true });
  res.json({ products });
  console.log("reading data on server");
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = products.find((product) => product.id == id);
  res.json(data);
  console.log(data);
});

app.listen(8000, () => {
  console.log("listening on port number 8000");
});
