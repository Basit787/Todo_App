import type { Context } from "hono";
import {
  createToken,
  deepClone,
  encryptToken,
  verifyHashPassword,
} from "../helpers/utils.js";
import User from "../models/user.model.js";

export const auth = async (c: Context) => {
  const { email, password } = await c.req.json();
  try {
    const user = await User.findOne({ email });
    if (!user) return c.json({ error: "User not found" }, 400);

    const userObject = deepClone(user);

    const correctPassword = await verifyHashPassword(
      password,
      userObject.password
    );
    if (!correctPassword) return c.json({ error: "Password not matched" }, 400);

    const payload = {
      id: userObject._id,
      email: userObject.email,
      name: userObject.name,
    };
    const token = await createToken(payload);
    const encryptedToken = await encryptToken(token);

    return c.json(
      {
        message: "Login Successfully",
        data: { ...payload, token: encryptedToken },
      },
      200
    );
  } catch (error) {
    return c.json({ error: "Failed to login", reason: error }, 400);
  }
};
