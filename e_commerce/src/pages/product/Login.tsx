import AuthContainer from '@/components/auth/AuthContainer'
import FloatingInput from '@/components/auth/FloatingInput'
import DefaultLayout from '@/layout/DefaultLayout'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate()
  return (
    <DefaultLayout>
      <AuthContainer>
        <div className='flex md:w-[400px] w-full flex-col gap-[40px]'>
          <div>
          <h2 className='font-[500] text-center text-[36px]'>
          Log in to Exclusive
          </h2>
            <p className='text-center'>Enter your details below</p>
          </div>
          <div className='flex flex-col gap-[10px]'>
          
          <FloatingInput label='Email or phone Number' />
          <FloatingInput label='Password' type='password' />
          </div>
         

          <div className='flex justify-between items-center  gap-[10px] w-full'>
            <button onClick={()=>navigate("/dashboard")} className='bg-primary flex-1 rounded-[4px] text-white w-full py-[16px]'>
            Login
            </button>
            <Link to={"/reset-password"} className='text-primary flex-1 text-end text-[16px]'>Forgot password</Link>

          </div>
          <div className='flex items-center gap-[10px]'>
            <p className='text-[16px] text-[#00000070] '>Don't have account?</p>
            <Link to={"/login"} className='border-b text-[#00000070] font-[500] text-[16px] border-[#00000070]'>Create account</Link>
          </div>
          
        </div>
</AuthContainer>
    </DefaultLayout>
  )
}

export default Login