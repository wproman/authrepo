import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
export const registerFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email(),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters",
  }),
});
