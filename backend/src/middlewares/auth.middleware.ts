import type { Context, Next } from "hono";
import { decryptToken, verifyToken } from "../helpers/utils.js";

export const authMiddleware = async (c: Context, next: Next) => {
  try {
    const headers = c.req.header("Authorization");
    if (!headers)
      return c.json({ error: "Authorization headers are missing" }, 400);

    const token = headers.split(" ")[1];
    if (!token) return c.json({ message: "Token not found" }, 400);

    const decryptedToken = await decryptToken(token);
    const verifiedToken = await verifyToken(decryptedToken);

    c.set("user", verifiedToken);
    return await next();
  } catch (error) {
    return c.json({ error }, 400);
  }
};
