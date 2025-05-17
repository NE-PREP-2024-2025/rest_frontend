"use client";
import { type FC } from "react";
import { Icon } from "@iconify/react";

import logo from "/logo.png";
import { Link } from "react-router-dom";

type props = {
  handleLinkClick?: () => void;
};
const Sidebar: FC<props> = ({ handleLinkClick }) => {
  const navItems = [ {
    id:1,
    href: "/admin/dashboard",
    icon: "solar:widget-5-bold",
    label: "Dashboard",
  },
  {
    id:2,
    href: "/admin/users",
    icon: "solar:users-group-rounded-line-duotone",
    label: "Users",
  },
  {
    id:3,
    href: "/admin/products",
    icon: "solar:server-minimalistic-bold",
    label: "Products",
    },
  
    {
      id:4,
      href: "/admin/cart",
      icon: "solar:cart-check-broken",
      label: "Cart",
    },]
  const normalizedPathname = window.location.pathname
  return (
    <div className="bg-white h-screen border rounded-l-md">
      <div className="flex h-full max-h-screen flex-col gap-4 p-6 py-3">
        <Link to="#">
          <img src={logo} alt="logo" className="h-[75px] " />
        </Link>
        
        <nav className="py-2 grid gap-2 max-lg:text-sm font-medium overflow-y-auto custom-scrollbar">
          {navItems.map((link) => {
            const isActive = normalizedPathname.startsWith(link.href);


            const parentLinkStyles =
              isActive
                ? "bg-[#000000] text-white"
                : "text-dark-navy hover:bg-[#000000] hover:text-white transition duration-200";

            return (
              <div key={link.id}>
        
                  <Link
                    to={link.href}
                    className={`flex items-center gap-3 rounded-[20px] p-1 ${parentLinkStyles}`}
                    onClick={handleLinkClick}
                  >
                    <div
                      className={`flex p-3 items-center justify-center rounded-[20px] shadow-lg ${
                        isActive ? "bg-gray-secondary" : "bg-white"
                      }`}
                    >
                      <Icon
                        icon={link.icon}
                        width="24"
                        height="24"
                        className="text-blue"
                      />
                    </div>
                    {link.label}
                  </Link>
                
   
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
