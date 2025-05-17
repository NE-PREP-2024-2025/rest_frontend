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
import { verifyEmailSchema } from '@/lib/schema/auth';

import { useEffect, useState } from 'react';
import { useResendVerificationEmail, useVerifyEmail } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function VerifyEmail() {
  const form = useForm<z.infer<typeof verifyEmailSchema>>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      otp: '',
    },
  });

  const navigate=useNavigate()
  const verifyMutation = useVerifyEmail();

  const [timer, setTimer] = useState(600);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendEnabled(true);
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  async function onSubmit(data: z.infer<typeof verifyEmailSchema>) {
    if (!data.otp) {
      toast.error('Please enter the verification code.');
      return;
    }

    setLoading(true);
    try {
      const res = await verifyMutation.mutateAsync({ code: data.otp });

      if (res?.verified) {
        toast.success('Email verified successfully!');
        navigate('/login');
      } else {
        toast.error('Verification failed.');
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Verification failed.');
    } finally {
      setLoading(false);
    }
  }

  // @ts-ignore
  const { mutate: resendEmail, isLoading: isResending } =
    useResendVerificationEmail();

  const handleResend = () => {
    setIsResendEnabled(false);
    setTimer(600);

    resendEmail(undefined, {
      onSuccess: () => {
        toast.success('Verification code resent.');
      },
      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ||
            'Failed to resend verification email.'
        );
        setIsResendEnabled(true);
      },
    });
  };

  return (
    <div className="flex font-urbanist items-center md:h-[calc(100vh-150px)] justify-between">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-full md:overflow-auto lg:overflow-hidden justify-center max-w-[560px] gap-4">
          <div>
            <h2 className="text-dark-navy font-urbanist md:text-[52px] text-[40px] md:pt-0 pt-[20px] font-[600]">
              Verify Your Email
            </h2>
            <p className="text-dark-navy-light text-[20px]">
              We’ve sent a 6-digit code to{' '}
              <span className="font-[400] text-dark-navy">john@gmail.com.</span>{' '}
              Enter it below.
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
                label={loading ? 'Verifying...' : 'Verify'}
                disabled={loading}
              />
            </form>
          </Form>
          <div className="w-full flex items-center justify-center">
            <p>Didn’t receive code?</p>
            <button
              onClick={handleResend}
              disabled={!isResendEnabled || isResending}
              className={`px-1 text-dark-navy-light font-urbanist font-[600] text-[18px] ${
                !isResendEnabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isResending
                ? 'Resending...'
                : isResendEnabled
                ? 'Resend'
                : `Resend in ${formatTime(timer)}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
