import express from "express";
import { addNewTodo, getAllTodos, getUsersTodos } from "../controllers/todosController.js";

let router = express.Router();

router.get("/", getAllTodos).post("/", addNewTodo);
router.get("/:id" , getUsersTodos)

export default router;

