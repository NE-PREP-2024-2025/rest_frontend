
import Button from "@/components/auth/Button";
import Input from "@/components/auth/Input";
import RightSection from "@/components/auth/RightSection";
import { useLogin } from "@/hooks/useAuth";
import { loginSchema } from "@/lib/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { z } from "zod";

type LoginInput = z.infer<typeof loginSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin();

  const onSubmit = async (data: LoginInput) => {
    loginMutation.mutateAsync(data);
  };

  const loading = loginMutation.isPending;

  return (
    <div className="flex font-urbanist items-center md:h-[calc(100vh-150px)] justify-between">
      <div className="lg:w-[50%] w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-full md:overflow-auto lg:overflow-hidden justify-center max-w-[560px] gap-4">
          <div>
            <h2 className="text-dark-navy font-urbanist md:text-[52px] text-[40px] md:pt-0 pt-[20px] font-[600]">
              Welcome
            </h2>
            <p className="text-dark-navy-light text-[20px]">
              Log in to your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <Input
              {...register("email")}
              required
              label="Email"
              prevIcon="solar:letter-linear"
              backIcon="solar:question-circle-linear"
              placeholder="example@gmail.com"
              backIconInfo="Use email you used while creating your account"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <Input
              {...register("password")}
              required
              label="Password"
              prevIcon="solar:lock-password-linear"
              placeholder="**************"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <Link
              to={`/reset-password`}
              className="underline text-primary-blue font-urbanist font-[400] text-[18px] hover:text-blue-800 pb-[20px]"
            >
              Forgot password
            </Link>
            <Button
              className={`bg-blue hover:bg-blue/80 ${
                loading ? "opacity-70" : ""
              }`}
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-x-2">
                  <ClipLoader size={20} color="#fff" />
                  <span>Please wait...</span>
                </div>
              ) : (
                <span className="text-white">Log In</span>
              )}
            </Button>
          </form>

          <div className="w-full flex items-center justify-center">
            <p>
              Don’t have an account?
              <Link
                to={`/signup`}
                className="underline text-primary-blue font-urbanist font-[400] text-[18px] hover:text-blue-800 pb-[20px]"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] lg:block hidden overflow-hidden mt-[-100px] h-full">
        <RightSection />
       
      </div>
    </div>
  );
}

export default Login;
