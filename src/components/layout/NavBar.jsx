import React from "react";
import Logouticon from "./assets/icons/logout-icon.svg";
import { Link } from "react-router-dom";
function NavBar({ children, className = "" }) {
  return (
    <>
      <nav className="absolute z-1 h-lvh w-62 overflow-hidden bg-black px-3 py-4.5 outline-1 outline-[#b6b6b663] md:fixed md:top-0 md:block md:h-lvh md:w-18 md:outline-1 lg:w-2/12">
        {children}

        <Link
          to={"/"}
          className="absolute bottom-0 my-6.5 cursor-pointer items-center gap-x-4 rounded-xl bg-[#c0c0c027] p-3.5 leading-5 md:w-[70%] lg:w-[90%]"
        >
          <img className="size-5.5 md:block" src={Logouticon} alt="" />
          <span className="text-md font-bold md:hidden lg:block">Logout</span>
        </Link>
      </nav>
      <main className="fixed top-0 block h-lvh w-lvw bg-[#ffffff56] backdrop-blur-[1px] md:hidden lg:hidden"></main>
    </>
  );
}

export default NavBar;
