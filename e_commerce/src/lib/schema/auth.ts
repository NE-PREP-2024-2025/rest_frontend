import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export const registerSchema = z
  .object({
    firstName: z.string().min(3, { message: "First name must be at least 3 characters long" }),
    lastName: z.string().min(3, { message: "Last name must be at least 3 characters long" }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords must match",
  });


export const verifyEmailSchema = z.object({
  otp: z.string().min(6, { message: "OTP must be at least 6 characters long" }),
})

export const twoFactorAuthenticationSchema = z.object({
  otp: z.string().length(6, {
    message: "The OTP must be exactly 6 digits.",
  }),
})

export const resetPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  
})
export const newPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"], 
});
