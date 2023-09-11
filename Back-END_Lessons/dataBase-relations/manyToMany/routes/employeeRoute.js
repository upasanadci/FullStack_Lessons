import express from "express";
import {
  addNewEmployee,
  getEmployees,
} from "../controllers/employeeControllers.js";

const router = express.Router();

router.get("/", getEmployees).post("/", addNewEmployee);

export default router;
