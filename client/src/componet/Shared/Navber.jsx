import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // lg:md:left-[277px]
  return (
    <>
      <nav className="lg:md:w-[1366px] lg:md:h-[32px] lg:md:top-[27px]  flex flex-wrap items-center justify-around border border-slate-400">
        <div className="flex md:hidden">
          <button id="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? (
              <img
                className="block"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            ) : (
              <img
                className="block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
            )}
          </button>
        </div>
        <div
          className={`toggle ${
            isMenuOpen ? "w-full md:w-auto" : "hidden md:w-auto md:flex"
          } text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none`}
        >
          <Link
            to={`/`}
            href="#"
            className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none "
          >
            Home
          </Link>
          <Link
            to={`/about`}
            href="#"
            className=" block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none "
          >
            <div className="flex justify-center items-center ">
              <span>About</span>

              <GoChevronDown className="text-xl pt-[2px]" />
            </div>
          </Link>
          <Link
            href="#"
            to={`/contact`}
            className="block md:inline-block text-blue-900 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none "
          >
            Contact
          </Link>
          <Link
            href="#"
            to={`/service`}
            className="block md:inline-block text-blue-900 px-3 py-1 border-b-2 border-blue-900 hover:text-slate-200 md:border-none "
          >
            Our Services
          </Link>
        </div>

        <div>
          <img
            className="w-[202.47px] h-[38.28px] top-[27px] left-[859px]"
            src={logo}
            alt="logo"
          />
        </div>
        <div
          to={`/login`}
          href="#"
          className={`toggle ${
            isMenuOpen ? "flex" : "hidden md:flex"
          } w-full md:w-auto  text-right  hover:bg-green-500  `}
        >
          Sign In
        </div>
      </nav>
    </>
  );
};

export default Navber;
