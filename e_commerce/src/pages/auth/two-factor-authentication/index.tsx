'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { toast } from 'sonner';
import Button from '@/components/auth/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { twoFactorAuthenticationSchema } from '@/lib/schema/auth';
import { useNavigate } from 'react-router-dom';


function TwoFactorAuthentication() {
  const form = useForm<z.infer<typeof twoFactorAuthenticationSchema>>({
    resolver: zodResolver(twoFactorAuthenticationSchema),
    defaultValues: {
      otp: '',
    },
  });

  const navigate=useNavigate()

  function onSubmit(data: z.infer<typeof twoFactorAuthenticationSchema>) {
    // toast('OTP Submitted:', {
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });

    toast.success('2FA setup sucessfully!!');

    navigate('/login');
  }

  return (
    <div className="flex font-urbanist items-center md:h-[calc(100vh-150px)] justify-between">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-full md:overflow-auto lg:overflow-hidden justify-center max-w-[680px] gap-4">
          <div>
            <h2 className="text-dark-navy font-urbanist md:text-[52px] text-[40px] md:pt-0 pt-[20px] font-[600]">
              Two-Factor Authentication
            </h2>
            <p className="text-dark-navy-light text-[20px]">
              Enter the code from your authenticator app .
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col w-full justify-center items-center gap-4"
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup className="flex gap-[20px]">
                          {[...Array(6)].map((_, index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="border size-[50px] !rounded-full"
                            />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-blue"
                label="Submit"
              ></Button>
            </form>
          </Form>
          <div className="w-full flex items-center justify-center">
            <p>Didn’t receive code?</p>
            <button className="px-1 text-dark-navy-light font-urbanist font-[600] text-[18px]">
              Resend (0:32)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoFactorAuthentication;
