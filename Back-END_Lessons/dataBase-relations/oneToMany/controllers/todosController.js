import Todo from "../models/Todos.js";

export const addNewTodo = async (req, res) => {
  try {
    const data = { ...req.body };
    const newTodo = await Todo.create(data);
    res.json(newTodo);
  } catch (error) {
    res.json(error.message);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const data = await Todo.find().populate("user");
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};

export const getUsersTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Todo.find({ user: id });
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};
