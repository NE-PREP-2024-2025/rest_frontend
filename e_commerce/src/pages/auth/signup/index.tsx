'use client';
import Button from '@/components/auth/Button';
import Input from '@/components/auth/Input';
import RightSection from '@/components/auth/RightSection';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/lib/schema/auth';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';
import { useRegister } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

type RegisterInput = z.infer<typeof registerSchema>;

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });
  
  const registerMutation = useRegister();

  const onSubmit = async (data: RegisterInput) => {
    registerMutation.mutateAsync(data)
  };

  const loading = registerMutation.isPending
  return (
    <div className="flex font-urbanist items-center md:h-[calc(100vh-150px)] justify-between">
      <div className="lg:w-[50%] w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-full sm:overflow-auto md:overflow-hidden justify-center xl:max-w-[690px] lg:max-w-[590px] gap-4">
          <div>
            <h2 className="text-dark-navy font-urbanist md:text-[52px] text-[40px] md:pt-0 pt-[20px] font-[600]">
              Create Your Account
            </h2>
            <p className="text-dark-navy-light text-[20px]">
              Create your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-2">
              <div className="w-full">
                <Input
                  {...register('firstName')}
                  required
                  label="First name"
                  prevIcon="solar:user-rounded-linear"
                  backIcon="solar:question-circle-linear"
                  backIconInfo="Make sure that your first name is spelled correctly"
                  placeholder="John"
                  type="text"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <Input
                  {...register('lastName')}
                  required
                  label="Last name"
                  prevIcon="solar:user-rounded-linear"
                  backIcon="solar:question-circle-linear"
                  backIconInfo="Make sure that your last name is spelled correctly"
                  placeholder="Doe"
                  type="text"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <Input
              {...register('email')}
              required
              label="Email"
              prevIcon="solar:letter-linear"
              placeholder="example@gmail.com"
              type="email"
              backIcon="solar:question-circle-linear"
              backIconInfo="Email will be used while contacting you"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <Input
              {...register('password')}
              required
              label="Password"
              prevIcon="solar:lock-password-linear"
              placeholder="**************"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <Input
              {...register('confirmPassword')}
              required
              label="Confirm password"
              prevIcon="solar:lock-password-linear"
              placeholder="**************"
              type="password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
            <Button
              className={`bg-blue hover:bg-blue/80 ${
                loading ? 'opacity-70' : ''
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
                <span className="text-white">Sign Up</span>
              )}
            </Button>
          </form>

          <div className="w-full flex items-center justify-center">
            <p>
              Already have an account?{' '}
              <Link
                to="/login"
                className="underline text-primary-blue font-urbanist font-[400] text-[18px] hover:text-blue-800 pb-[20px]"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[50%] lg:block hidden overflow-hidden mt-[-100px] h-full">
        <RightSection
          image1="/images/auth/auth_3.jpeg"
          image2="/images/auth/auth_2.jpeg"
        />
        
      </div>
    </div>
  );
}

export default Signup;
