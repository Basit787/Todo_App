import { Hono } from "hono";
import * as users from "../controllers/users.controller.js";
import { validationMiddleware } from "../middlewares/validation.middleware.js";
import { userValidation } from "../zod/user.validation.js";

export const userRoutes = new Hono();

userRoutes.post(
  "/createUser",
  validationMiddleware(userValidation),
  users.registerUser
);

userRoutes.get("/getUserDetails/:id", users.getUserDetails);

userRoutes.get("/getUserDetails", users.getUser);
