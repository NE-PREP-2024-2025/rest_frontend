import { toast } from "sonner";
import { unauthorizedAPI } from "@/config/axios.config";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthService } from "@/services/auth.service";
import { UtilsService } from "@/services/utils.service";
import { useNavigate } from "react-router-dom";


const authService = new AuthService(new UtilsService());
const utils = new UtilsService();

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => authService.getProfile(),
  });
};
export const useRegister = () => {
  const navigate=useNavigate()
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (payload: RegisterDto) =>
      authService.registerUser(payload),
    onSuccess: async (response: { message: string }) => {
      toast.success(response.message);
      navigate("/login");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Registration failed. Please try again.");
    },
  });
};
export const useLogin = () => {
  const navigate=useNavigate()
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (payload: LoginDto) => authService.loginUser(payload),
    onSuccess: async (response: LoginResponse) => {
      utils.setCookies("accessToken", response.accessToken);
      toast.success("logged in successfully");
      navigate("/dashboard");
      window.location.reload(); 
    },
    onError: (error: any) => {
      // console.log("error:", error);
      toast.error(error?.message || "Login failed. Please try again.");
    },
  });
};
export const useResendVerificationEmail = () =>
  useMutation({
    mutationKey: ["resendVerificationEmail"],
    mutationFn: async () => {
      const res = await unauthorizedAPI.post("/auth/resend-verification-email");
      return res.data;
    },
    onSuccess: (response: { otpSent: boolean; message: string }) => {
      toast.success(response.message || "Verification code resent!");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to resend verification email.");
    },
  });

export const useVerifyEmail = () =>
  useMutation({
    mutationKey: ["verifyEmail"],
    mutationFn: async (payload: { code: string }) => {
      const res = await unauthorizedAPI.post("/auth/verify-email", payload);
      return res.data;
    },
    onSuccess: (response: { verified: boolean; message: string }) => {
      toast.success(response.message || "Email verified successfully!");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Invalid or expired verification code.");
    },
  });
export const useRequestPasswordReset = () =>
  useMutation({
    mutationKey: ["requestPasswordReset"],
    mutationFn: async (payload: { email: string }) => {
      const res = await unauthorizedAPI.post(
        "/auth/request-password-reset",
        payload
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("If your email exists, a reset link was sent.");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to request password reset.");
    },
  });
export const useResetPassword = () =>
  useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: async (payload: { token: string; newPassword: string }) => {
      const res = await unauthorizedAPI.post("/auth/reset-password", payload);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Password has been reset successfully!");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to reset password.");
    },
  });
