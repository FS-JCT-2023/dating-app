import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.string().regex(/^(ADMIN|MATCHMAKER|CLIENT)$/),
});

export const clientSignUpSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6),
  firstName: z.string(),
  lastName: z.string(),
  role: z.string().regex(/^(CLIENT)$/),
  
});


