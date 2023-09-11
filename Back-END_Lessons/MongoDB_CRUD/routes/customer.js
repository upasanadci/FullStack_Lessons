import express from "express";
import Customer from "../models/customer.js";

let router = express.Router();

router.get("/get", async (req, res) => {
  const data = await Customer.find({ age: { $gte: 22 } });
  console.log("data is:", data);
  res.send(data);
});

router.post("/post", async (req, res) => {
  const data = await Customer.create({
    firstName: "upasana",
    lastName: "tailor",
    email: "ups@gmail.com",
  });
  console.log("data is", data);
  res.send(data);
});

router.post("/create", (req, res) => {
  const newData = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
  });
  newData.save();
  console.log("data is created");
  res.send(newData);
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Customer.findByIdAndUpdate(
    { _id: id },
    {
      firstName: "Peculiar",
    }
  );
  console.log("updated data is", data);
  res.send(data);
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log("id is:", id);
  //const deleteddata = await Customer.findByIdAndDelete({ _id: id });
  const deleteddata = await Customer.findByIdAndRemove(id);
  console.log("deleted data is:", deleteddata);
  res.send(deleteddata);
});

export default router;
