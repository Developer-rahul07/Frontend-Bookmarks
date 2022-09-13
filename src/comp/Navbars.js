import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
// import logo from "../Assates/Images/logo.png";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbars() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div  data-aos="fade-down"
    data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-delay='1500'
     data-aos-duration='1000'>
      <nav className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img className="h-12 w-13" src={logo} alt="Club_Logo" /> */}   
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-14">
                  <NavLink
                    to="/"
                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium decoration-clone"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/about"
                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/Products"
                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Products
                  </NavLink>

                  <NavLink
                    to="/login"
                    className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    className="text-black hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className=" text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </NavLink>

                <NavLink
                  to="/Products"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Products
                </NavLink>
                
                <NavLink
                  to="/login"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Register
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbars;
