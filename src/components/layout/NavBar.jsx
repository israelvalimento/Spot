import React from "react";

function NavBar({ children, className = "" }) {
  return (
    <>
      <nav className="absolute z-10 w-62 overflow-hidden bg-black px-3 py-4.5 outline-1 outline-[#b6b6b663] md:fixed md:top-0 md:block md:h-lvh md:w-18 md:outline-1 lg:w-2/12">
        {children}
      </nav>
      <main className="fixed top-0 block h-lvh w-lvw bg-[#ffffff56] backdrop-blur-[1px] md:hidden lg:hidden"></main>
    </>
  );
}

export default NavBar;
