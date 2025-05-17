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
import { newPasswordSchema } from '@/lib/schema/auth';
import Input from '@/components/auth/Input';
import PasswordStrengthIndicator from '@/components/auth/PasswordStrengthIndicator';
import { useNavigate } from 'react-router-dom';


function NewPassword() {
  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const navigate = useNavigate();
  function onSubmit(data: z.infer<typeof newPasswordSchema>) {
    // toast('New password Submitted:', {
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });

    toast.success('Password resetted!');
    navigate('/login');
  }

  return (
    <div className="flex font-urbanist items-center md:h-[calc(100vh-150px)] justify-between">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-full md:overflow-auto lg:overflow-hidden justify-center max-w-[580px] gap-4">
          <div>
            <h2 className="text-dark-navy font-urbanist md:text-[52px] text-[40px] md:pt-0 pt-[20px] font-[600]">
              New Password
            </h2>
            <p className="text-dark-navy-light text-[20px]">
              Provide new password.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col w-full  justify-center items-center gap-4"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full py-[10px]">
                    <FormControl>
                      <Input
                        {...field}
                        required
                        label="Password"
                        prevIcon="solar:letter-linear"
                        placeholder="**************"
                        type="password"
                      />
                    </FormControl>
                    <PasswordStrengthIndicator password={field.value} />

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-full py-[10px]">
                    <FormControl>
                      <Input
                        {...field}
                        required
                        label="Confirm Password"
                        prevIcon="solar:letter-linear"
                        placeholder="**************"
                        type="password"
                      />
                    </FormControl>
                    <PasswordStrengthIndicator password={field.value} />
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
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
