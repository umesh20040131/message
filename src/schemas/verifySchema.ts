import {z} from "zod";

export const verifySchema = z.object({
    email: z.string().email("Invalid email address"),
    code: z.string().length(6, "Verification code must be 6 characters long"),
}); 