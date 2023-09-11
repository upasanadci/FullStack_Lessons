import User from "../models/User.js";

export const addNewUser = async (req, res) => {
  try {
    console.log(req.body)
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.json(error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};
