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
import { resetPasswordSchema } from '@/lib/schema/auth';
import Input from '@/components/auth/Input';
import { useNavigate } from 'react-router-dom';


function ResetPassword() {
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: '',
    },
  });
  const navigate=useNavigate()
  function onSubmit(data: z.infer<typeof resetPasswordSchema>) {
    toast('Email Submitted:', {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    toast.success('Password resetted!! Login .');
    navigate('/new-password');
  }

  return (
    <div className="flex font-urbanist items-center md:h-[calc(100vh-150px)] justify-between">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col w-full md:overflow-auto lg:overflow-hidden justify-center max-w-[580px] gap-4">
          <div>
            <h2 className="text-dark-navy font-urbanist md:text-[52px] text-[40px] md:pt-0 pt-[20px] font-[600]">
              Reset Your Password
            </h2>
            <p className="text-dark-navy-light text-[20px]">
              Enter your email to receive a password reset link.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col w-full  justify-center items-center gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full py-[20px]">
                    <FormControl>
                      <Input
                        {...field}
                        required
                        label="Email"
                        prevIcon="solar:letter-linear"
                        placeholder="example@gmail.com"
                        type="email"
                        backIcon="solar:question-circle-linear"
                        backIconInfo="Email will be used while contacting you"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" label="Submit"></Button>
            </form>
          </Form>
          <div className="w-full flex items-center justify-center">
            <p>Didn’t receive Email?</p>
            <button className="px-1 text-dark-navy-light font-urbanist font-[600] text-[18px]">
              Resend (0:32)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
