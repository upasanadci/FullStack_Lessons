import Employee from "../models/Employee.js";

export const addNewEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.json(newEmployee);
  } catch (error) {
    res.json(error.message);
  }
};

export const getEmployees = async (req, res) => {
  try {
    const data = await Employee.find();
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};
