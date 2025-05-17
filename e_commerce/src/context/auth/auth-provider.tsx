"use client";
import LoadingScreen from "@/components/common/loading-screen";
import { useGetProfile } from "@/hooks/useAuth";

import { UtilsService } from "@/services/utils.service";
import React, { useContext, useEffect } from "react";
import { Cookies } from "react-cookie";
import { AuthContext } from "./auth-context";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();
const utilsService = new UtilsService();

const publicRoutes = [
  "login",
  "users",
  "cart",
  "wishlist",
  "signup",
  "reset-password",
  "new-password"
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, data, isError } = useGetProfile();
  const navigate=useNavigate()

  const isPublicRoute = publicRoutes.some((route) => window.location.pathname.split("/").pop()==route)||window.location.pathname=="/";

  useEffect(() => {
    if (isPublicRoute) return;
    
    const accessToken = cookies.get("accessToken");

    // if (!accessToken) {
    //   utilsService.handleUnauthorized();
    //   navigate("/login");
    //   return;
    // } 

    // if (isError) {
    //   utilsService.handleUnauthorized();
    //   navigate("/login");
    //   return;
    // }
  }, [isError, data, navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        user: data ?? null,
        isAuthenticated: data?.isVerified ?? false,
        loading: isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
