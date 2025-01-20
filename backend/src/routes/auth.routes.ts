import { Hono } from "hono";
import { auth } from "../controllers/auth.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { authValidation } from "../zod/auth.validation.js";

export const authRoute = new Hono();

authRoute.post("/", validationMiddleware(authValidation), auth);
