import React from "react";

function NavBar({ children, className = "" }) {
  return (
    <>
      <nav className="absolute overflow-hidden bg-black outline-1 w-62 z-10 md:fixed md:top-0 md:block md:outline-1 px-3 py-4.5 md:h-lvh md:w-18 lg:w-2/12 outline-[#b6b6b663]">
        {children}
      </nav>
      <main className="fixed top-0  w-lvw h-full  bg-[#ffffff27] backdrop-blur-[1px] block md:hidden lg:hidden"></main>
    </>
  );
}

export default NavBar;
