'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Icon } from '@iconify/react/dist/iconify.js';
import dayjs from 'dayjs';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Cookies } from 'react-cookie';
import Sidebar from './sidebar';
import { useAuth } from '@/context/auth/auth-provider';
import { Link, useNavigate } from 'react-router-dom';

const Heading = () => {
  const today = dayjs().format('dddd, MMMM D, YYYY');
  const [isSheetOpen, setSheetOpen] = useState(false);

  const { user } = useAuth();
  const cookies = new Cookies();
  const navigate=useNavigate()
  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  const handleLogout = () => {
    cookies.remove('accessToken', { path: '/' });
    navigate('/login');
    window.location.reload();
  };

  return (
    <header className="flex h-20 items-center gap-4 px-4 lg:h-[80px] lg:px-6">
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <Menu className="h-5 w-5 text-black" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-white lg:hidden">
          <SheetTitle className="hidden"></SheetTitle>
          <Sidebar handleLinkClick={handleLinkClick} />
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center justify-between">
        <p className=' capitalize text-[32px] font-[500]'>
        {
          window.location.pathname.split("/").pop()
         }
        </p> 
        <div className="flex items-center gap-3">
        <div className="flex flex-row gap-3 items-center cursor-pointer">
              <img
                src={
                  user?.profileImageUrl ||
                  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                }
                alt="profile"
                width={45}
                height={45}
                className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full object-cover"
              />

              <div className="max-sm:hidden">
                <h4 className="font-medium text-[18px]">
                  Hey, {user?.lastName}
                </h4>
                <p className="text-gray-primary text-[14px]">{today}</p>
              </div>
             
            </div>
         
        </div>
      </div>
    </header>
  );
};

export default Heading;
