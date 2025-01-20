import { Hono } from "hono";
import * as todo from "../controllers/todos.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { todoValidation } from "../zod/todo.validation.js";

export const todoRoutes = new Hono();
todoRoutes.post(
  "/createTodo",
  authMiddleware,
  validationMiddleware(todoValidation),
  todo.createTodos
);

todoRoutes.get("/getAllTodos", authMiddleware, todo.getAllTodos);
todoRoutes.get("/getSingleTodo/:id", authMiddleware, todo.getSingleTodo);
todoRoutes.delete("/deleteTodo/:id", authMiddleware, todo.deleteTodo);
todoRoutes.put("/updateTodo/:id", authMiddleware, todo.updateTodo);
