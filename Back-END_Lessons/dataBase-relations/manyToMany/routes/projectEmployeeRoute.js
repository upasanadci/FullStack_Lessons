import express from "express";
import {
  addNewProjectEmployee,
  deleteProjectEmployee,
  getEmployeesByProject,
  getProjectEmployee,
} from "../controllers/projectEmployeeControllers.js";

const router = express.Router();

router.get("/", getProjectEmployee).post("/", addNewProjectEmployee);
router.get("/:projectId" , getEmployeesByProject)
router.delete("/:id" , deleteProjectEmployee)

export default router;
