import express from "express";
import { addNewUser, getAllUsers } from "../controllers/userControllers.js";

let router = express.Router();

router.get("/", getAllUsers).post("/", addNewUser);

export default router;
