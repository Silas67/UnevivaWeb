import Unevivalogo from "../assets/images/Unevivalogo.png";
import { navigation } from "../permanent";
import { hamburger } from "../assets/icons";
import Buttondr from "./Buttondr";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";


const Nav = () => {
  const pathname = useLocation();
  const [openNav, setOpenNav] = useState(false);

  const toggleNavigation = () => {
    setOpenNav(!openNav)
  };

  const handleClick = () => {
    if (!openNav) return;
    enablePageScroll;
    setOpenNav(false);
  };

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50  border-green-800 lg:bg-Mint ${
        openNav ? "bg-mint-400 transition-colors duration-100" : "bg-Mint"
      }`}
    >
      <div className="flex items-center px-14 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-20 xl:mr-8">
          <img src={Unevivalogo} alt="Uneviva Logo" width={50} height={19} />
        </a>
        <nav
          className={`fixed top-0 right-0 bottom-0 bg-mint lg:static lg:flex lg:mx-auto transition-transform duration-300 ease-in-out transform flex flex-nowrap bg-opacity-50${
            openNav
            ? "translate-x-full" 
            : "translate-x-0 "}max-lg:translate-x-full lg:translate-x-0`}
        >
          <div className="relative z-2 items-center flex flex-col justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                onClick={handleClick}
                className="block relative text-2xl uppercase text-white transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-bold leading-5 lg:hover:text-rose_quartz-600 xl:px-12"
              >
                {item.title}
              </Link>
            ))}
          </div>
      
        </nav>
        <div className="hidden max-lg:block fixed right-14" onClick={toggleNavigation}>
          <img src={hamburger} width={20} height={20} />
        </div>

        <div>
            <Buttondr label="Account" />
        </div>

        <div className=" flex items-center px-6 relative max-sm:right-20 max-xl:right-">
          <a href="/" className=" text-white-smoke text-xl hover:text-mint-200 z-10"><BsCart2/>
          </a>
          <span className="flex w-[15px] justify-center text-center mt-[-20px] ml-[-10px] bg-bittersweet rounded-full text-xs text-white-smoke z-20 ">0</span>
        </div>
        
      </div>
    </header>
  );
};

export default Nav;
