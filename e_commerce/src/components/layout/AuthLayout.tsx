
import { Link } from 'react-router-dom';
import logo from '/logo.png'
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={` w-full md:px-[34px] px-[20px] py-[40px] h-screen  antialiased`}
    >
      <Link to={"/"} className="flex justify-start">
        <img
          src={logo}
          width={80}
          
          alt="logo" 
          className=""
        />
      </Link>
      {children}
    </section>
  );
}
