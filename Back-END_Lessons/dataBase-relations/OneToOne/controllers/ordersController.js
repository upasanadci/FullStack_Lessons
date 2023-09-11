import Order from "../models/Order.js";

export const getAllOrders = async (req, res) => {
  try {
    const data = await Order.find();
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};

export const addNewOrder = async (req, res) => {
  try {
    const data = req.body;

    const newOrder = await Order.create(data);
    res.json(newOrder);
  } catch (error) {
    res.json(error.message);
  }
};
