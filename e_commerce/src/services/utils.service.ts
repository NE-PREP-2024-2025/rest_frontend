import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const isProduction = process.env.NODE_ENV === "production";

export class UtilsService {
  // Helper function for API requests
  async handleApiRequest(apiCall: () => Promise<any>): Promise<any> {
    try {
      const response = await apiCall();
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data;
        throw new Error(errorData.message || "Something went wrong");
      } else {
        console.error("Unexpected error:", error);
        // throw error;
      }
    }
  }

  // Local Storage Helpers
  setLocalStorage(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }

  getLocalStorage(key: string) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  }

  removeLocalStorage(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  }

  setCookies(key: string, value: string) {
    cookies.set(key, value, {
      path: "/",
      sameSite: "strict",
    });
  }

  handleUnauthorized = () => {
    cookies.remove("accessToken", { path: "/" });
    return;
  };
}
