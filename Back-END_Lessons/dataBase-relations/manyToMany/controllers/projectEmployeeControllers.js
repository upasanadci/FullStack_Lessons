import Project from "../models/Project.js";
import ProjectEmployee from "../models/ProjectEmployee.js";

export const addNewProjectEmployee = async (req, res) => {
  try {
    const newRelation = await ProjectEmployee.create(req.body);
    res.json(newRelation);
  } catch (error) {
    res.json(error.message);
  }
};

export const getProjectEmployee = async (req, res) => {
  try {
    const data = await ProjectEmployee.find()
      .populate("project")
      .populate("employee");
    res.json(data);
  } catch (error) {
    res.json(error.message);
  }
};

export const getEmployeesByProject = async (req, res) => {
  try {
    const employees = await ProjectEmployee.find({
      project: req.params.projectId,
    }).populate("employee");
    res.json(employees);
  } catch (error) {
    res.json(error.message);
  }
};


export const deleteProjectEmployee = async (req,res) => {
  try {
    let deletedRelation = await ProjectEmployee.findByIdAndDelete(req.params.id)
    res.json("entry has been deleted")
  } catch (error) {
    res.json(error.message);
    
  }
}