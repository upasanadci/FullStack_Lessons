import express from "express";
import {
  addNewProject,
  getProjects,
} from "../controllers/projectControllers.js";

const router = express.Router();

router.get("/", getProjects).post("/", addNewProject);

export default router;
