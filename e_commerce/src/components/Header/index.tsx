import React, { useContext, useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import BadgeIcon from "./BadgeIcon";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Link, useLocation } from "react-router-dom";
import { profileItem } from "./ProfileItem";
import { AuthContext } from "@/context/auth/auth-context";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const authContext=useContext(AuthContext)
  const navItems = [
    { name: "Products", href: "/" },
    { name: "Categories", href: "/categories" },
  ];
  const [isAuthenticated, setIsAuthenticated] = useState(authContext?.isAuthenticated);
  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("signup")
    ) {
      setIsAuthenticated(false);
    }
  }, [location]);

  return (
    <header className="w-full fixed bg-white z-[3] border-b-[0.5px] h-[] border-[#00000030] ">
      <nav className="bg-white w-full border-gray-200 px-4 lg:px-12 py-[26.5px]">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <img src="/logo.png" className="mr-3 h-12 sm:h-20" alt="Logo" />
            <p>Shop</p>
          </a>
          <div className="flex items-center gap-[24px] lg:order-2">
            <SearchBox />
            {!isAuthenticated ? (
              <div className="flex gap-3">
                   <Link
                to={"/login"}
                className="py-[16px] flex items-center justify-center rounded-[4px] w-[123px] bg-primary text-white"
              >
                Login
                </Link>
                <Link
                to={"/login"}
                className="py-[16px] flex items-center justify-center rounded-[4px] w-[123px] bg-primary text-white"
              >
                Signup
              </Link>
           </div>
            ) : (
              <div className="flex items-center gap-[16px]">
                <BadgeIcon link="/wishlist">
                  <img src="/icons/heart.svg" />
                </BadgeIcon>
                <BadgeIcon link="/cart" count={2}>
                  <img src="/icons/Cart1.svg" />
                </BadgeIcon>
                <Popover>
                  <PopoverTrigger>
                    <img src="/icons/user.svg" />
                  </PopoverTrigger>
                  <PopoverContent className="bg-black  flex flex-col gap-[10px] text-white rounded-[8px] border-none  mt-[10px] mr-[60px]">
                    {profileItem.map((item) => {
                      return (
                        <>
                          {item.href != "/logout" ? (
                            <Link
                              className="flex min-w-fit gap-[10px] items-center"
                              to={item.href}
                            >
                              {item.icon}
                              {item.title}
                            </Link>
                          ) : (
                            <button className="flex min-w-fit gap-[10px] items-center">
                              {item.icon}
                              {item.title}
                            </button>
                          )}
                        </>
                      );
                    })}
                  </PopoverContent>
                </Popover>
              </div>
            )}

            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
              isMobileMenuOpen ? "flex" : "hidden"
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {/* show the active link with animated growing border */}

              {navItems.map((item) => (
                <li key={item.name} className="nav-link">
                  <a
                    href={item.href}
                    className={`block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`lg:hidden ${
              isMobileMenuOpen ? "block" : "hidden"
            } absolute top-[170px] left-0 right-0 bg-white z-50 shadow-md`}
          >
            <ul className="flex items-center flex-col py-2">
              {navItems.map((item) => (
                <li key={item.name} className="nav-link">
                  <Link
                    to={item.href}
                    className="block py-2 px-4 text-gray-800 "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
