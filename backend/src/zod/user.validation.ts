import { z } from "zod";

export const userValidation = z.object({
  name: z.string().min(4, { message: "Min 4 char required" }),
  password: z.string().min(8, { message: "Min 8 char required" }),
  email: z.string().email(),
});
