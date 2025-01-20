import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { connectToDatabase } from "./db/index.js";
import "dotenv/config";
import { routes } from "./routes/index.js";
import { cors } from "hono/cors";
import { swaggerUI } from "@hono/swagger-ui";

const app = new Hono();

app.use(
  "/*",
  cors({
    origin: "*",
    allowMethods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length"],
    maxAge: 3600,
    credentials: true,
  })
);

app.get("/ui", swaggerUI({ url: "/doc" }));

const port = Number(process.env.PORT);

await connectToDatabase();

app.route("/api", routes);

serve({
  fetch: app.fetch,
  port,
});
