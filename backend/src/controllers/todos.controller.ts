import type { Context } from "hono";
import Todo from "../models/todo.model.js";
import { todosExclude } from "../constants/excludeFields.js";

export const createTodos = async (c: Context) => {
  const { id } = c.get("user");
  const todoData = await c.req.json();
  try {
    const todo = new Todo({ ...todoData, userId: id });
    const result = await todo.save();
    return c.json({ message: "Todo created successfully", result }, 201);
  } catch (error) {
    return c.json({ error: "Failed to create todo", reason: error }, 400);
  }
};

export const getAllTodos = async (c: Context) => {
  const { id } = c.get("user");
  try {
    const result = await Todo.find({ userId: id }).select(todosExclude);
    return c.json({ message: "Todos fetched successfully", result }, 200);
  } catch (error) {
    return c.json({ error: "Failed to get all todos", reason: error }, 400);
  }
};

export const getSingleTodo = async (c: Context) => {
  const { id } = c.get("user");
  const todoId = c.req.param("id");
  try {
    const result = await Todo.findOne({
      _id: todoId,
      userId: id,
    }).select(todosExclude);
    if (!result) return c.json({ error: "Todo not found" });
    return c.json({ message: "Todo fetched successfully", result }, 200);
  } catch (error) {
    return c.json({ error: "Failed to get todo", reason: error }, 400);
  }
};

export const deleteTodo = async (c: Context) => {
  const { id } = c.get("user");
  const deleteId = c.req.param("id");
  try {
    const result = await Todo.findOneAndDelete({
      _id: deleteId,
      userId: id,
    }).select(todosExclude);
    if (!result) return c.json({ error: "Todo not found" });
    return c.json({ message: "Todo deleted successfully", result }, 200);
  } catch (error) {
    return c.json({ error: "Failed to delete todo", reason: error }, 400);
  }
};

export const updateTodo = async (c: Context) => {
  const { id } = c.get("user");
  const updateId = c.req.param("id");
  const updateData = await c.req.json();
  try {
    const todo = await Todo.findOne({
      _id: updateId,
      userId: id,
    });

    if (!todo) return c.json({ error: "Todo not found" });

    Object.assign(todo, updateData);
    await todo.save();

    return c.json({ message: "Todo updated successfully" }, 200);
  } catch (error) {
    return c.json({ error: "Failed to update todo", reason: error }, 400);
  }
};
