import React from "react";
import { Link } from "react-router-dom";
function NavLinks({ src, NavName, to = "" }) {
  return (
    <>
      <Link
        to={to}
        className="items-center rounded-2xl gap-x-4 hover:bg-[#c0c0c027]   md:hover:bg-[#c0c0c027]  my-6.5 p-3.5 leading-5"
      >
        <img className="size-5.5 md:block " src={src} alt="" />
        <span className="font-bold text-md md:hidden lg:block">{NavName}</span>
      </Link>
    </>
  );
}

export default NavLinks;
