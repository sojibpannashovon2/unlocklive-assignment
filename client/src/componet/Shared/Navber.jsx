import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import Container from "./Container";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // lg:md:left-[277px]
  return (
    <>
      <Container>
        {/* xl:lg:md:w-[1366px] lg:md:left-[277px] lg:md:h-[32px] lg:md:top-[27px]
        mx-auto */}
        <div className=" max-w-[1920px]">
          <div className="  ">
            <nav className="bg-white shadow-sm  flex flex-wrap items-center justify-start xl:lg:md:justify-around  border-[#dfe2e8]     border-b-[1px] py-2">
              <div className="flex md:hidden ">
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
                  className=" block md:inline-block text-[#270A05]
 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none "
                >
                  <div className="flex  items-center gap-2">
                    <span>Home</span>

                    <GoChevronDown className="text-xl pt-[2px]" />
                  </div>
                </Link>
                <Link
                  // to={`/about`}
                  href="#"
                  className=" block md:inline-block text-[#270A05]
 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none "
                >
                  <div className="flex  items-center gap-2">
                    <span>Pages</span>

                    <GoChevronDown className="text-xl pt-[2px]" />
                  </div>
                </Link>
                <Link
                  href="#"
                  // to={`/contact`}
                  className="block md:inline-block text-[#270A05]
 hover:text-slate-200 px-3 py-1 border-b-2 border-blue-900 md:border-none "
                >
                  <div className="flex  items-center gap-2">
                    <span>Menu</span>

                    <GoChevronDown className="text-xl pt-[2px]" />
                  </div>
                </Link>
                <Link
                  href="#"
                  // to={`/service`}
                  className="block md:inline-block text-[#270A05]
 px-3 py-1 border-b-2 border-blue-900 hover:text-slate-200 md:border-none "
                >
                  <div className="flex  items-center gap-2">
                    <span>Contact us</span>

                    <GoChevronDown className="text-xl pt-[2px]" />
                  </div>
                </Link>
              </div>

              <div>
                <img
                  className="w-[202.47px] h-[38.28px] top-[27px] left-[859px] mt-6 xl:lg:md:mt-0"
                  src={logo}
                  alt="logo"
                />
              </div>

              <div className="flex  items-center gap-4 ml-[20px] mt-10 xl:lg:md:ml-0 xl:lg:md:mt-0">
                <MdSearch />
                <IoMdHeartEmpty />
                <FaCartArrowDown />
              </div>
              <div
                to={`/login`}
                href="#"
                className={`toggle ${
                  isMenuOpen ? "flex" : "hidden md:flex"
                } w-full md:w-auto  text-right  hover:bg-green-500  `}
              >
                <div className="flex justify-center items-center gap-3 mt-6 xl:lg:md:mt-0">
                  <FaUserCircle></FaUserCircle>
                  <div>Sign in</div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navber;
