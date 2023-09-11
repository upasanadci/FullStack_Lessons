import Employee from "../models/Employee.js";
import Project from "../models/Project.js";

export const addNewProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.json(newProject);
  } catch (error) {
    res.json(error.message);
  }
};

export const getProjects = async (req, res) => {
  try {
    const data = await Project.find();
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};
