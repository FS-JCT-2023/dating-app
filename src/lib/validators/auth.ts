import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.string().regex(/^(ADMIN|MATCHMAKER|CLIENT)$/),
});

export const signUpMatchMakerSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phoneNumber: z.string().min(10),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.string().regex(/^(MATCHMAKER)$/),});
