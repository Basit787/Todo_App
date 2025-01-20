import { z } from "zod";

export const authValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Min 8 char required" }),
});
