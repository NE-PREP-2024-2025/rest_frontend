import { authorizedAPI, unauthorizedAPI } from "@/config/axios.config";
import { UtilsService } from "./utils.service";

export class AuthService {
  constructor(private readonly utils: UtilsService) {}

  //   register
  registerUser(
    newUser: RegisterDto
  ): Promise<{ success: boolean; message: string }> {
    return this.utils.handleApiRequest(() =>
      unauthorizedAPI.post("/auth/register", newUser)
    );
  }

  //   login
  loginUser(user: LoginDto): Promise<LoginResponse> {
    return this.utils.handleApiRequest(() =>
      unauthorizedAPI.post("/auth/login", user)
    );
  }

  //   get current user (protected)
  getProfile(): Promise<IUser> {
    return this.utils.handleApiRequest(() =>
      authorizedAPI.get("/auth/profile")
    );
  }

  sendOtpEmail(email:string){
    return this.utils.handleApiRequest(()=>unauthorizedAPI.post("/auth/resend-verification-email"))
  }
  
  // verifyEmail (protected)
  verifyEmail(): Promise<{}> {
    return this.utils.handleApiRequest(() =>
      authorizedAPI.post("/auth/resend-verification-email", {})
    );
  }
}
