import type { Context } from "hono";
import {
  createHashPassword,
  createToken,
  decryptToken,
  deepClone,
  encryptToken,
  verifyToken,
} from "../helpers/utils.js";
import User from "../models/user.model.js";
import { userExclude } from "../constants/excludeFields.js";

export const registerUser = async (c: Context) => {
  const { password, email, ...userDetails } = await c.req.json();
  const hashPassword = await createHashPassword(password);
  try {
    const alreadyEmail = await User.findOne({ email });
    if (alreadyEmail) return c.json({ message: "User already exists" }, 400);

    const user = new User({
      ...userDetails,
      email,
      password: hashPassword,
    });
    const result = await user.save();
    const userObject = deepClone(result);
    const payload = {
      id: userObject._id,
      email: userObject.email,
      name: userObject.name,
    };
    const token = await createToken(payload);
    const encryptedToken = await encryptToken(token);

    return c.json(
      {
        message: "User registered successfully",
        result,
        token: encryptedToken,
      },
      201
    );
  } catch (error) {
    return c.json({ error: "Failed to register user", reason: error }, 400);
  }
};

export const getUserDetails = async (c: Context) => {
  const id = c.req.param("id");
  try {
    const userDetail = await User.findById(id).select(userExclude);
    return c.json(
      { message: "User detail fetched successfully", result: userDetail },
      200
    );
  } catch (error) {
    return c.json(
      { error: "Failed to fetched user details", reason: error },
      400
    );
  }
};

export const getUser = async (c: Context) => {
  try {
    const headers = c.req.header("Authorization");
    if (!headers)
      return c.json({ error: "Authorization headers are missing" }, 400);

    const token = headers.split(" ")[1];
    if (!token) return c.json({ message: "Token not found" }, 400);

    const decryptedToken = await decryptToken(token);
    const verifiedToken = await verifyToken(decryptedToken);
    return c.json(
      { message: "User detail fetched successfully", result: verifiedToken },
      200
    );
  } catch (error) {
    return c.json(
      { error: "Failed to fetched user details", reason: error },
      400
    );
  }
};
