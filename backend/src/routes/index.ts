import { Hono } from "hono";
import { authRoute } from "./auth.routes.js";
import { todoRoutes } from "./todo.routes.js";
import { userRoutes } from "./users.routes.js";

export const routes = new Hono();
routes.route("/todo", todoRoutes);
routes.route("/user", userRoutes);
routes.route("/auth", authRoute);
