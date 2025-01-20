import { z } from "zod";

export const todoValidation = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().min(4, "Description is required"),
  dateTime: z
    .string()
    .datetime()
    .default(() => new Date(Date.now()).toISOString()),
  deadline: z
    .string()
    .datetime()
    .default(() => new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()),
  priority: z
    .enum(["L", "M", "H"], {
      errorMap: () => ({ message: "Priority must be L, M, or H" }),
    })
    .default("L"),
  completed: z.boolean().default(false),
});
