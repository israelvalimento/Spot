import React from "react";
import { Link } from "react-router-dom";
function NavLinks({ src, NavName, to = "" }) {
  return (
    <>
      <Link
        to={to}
        className="my-6.5 items-center gap-x-4 rounded-xl p-3.5 leading-5 hover:bg-[#c0c0c027] md:hover:bg-[#c0c0c027]"
      >
        <img className="size-5.5 md:block" src={src} alt="" />
        <span className="text-md 0 font-bold md:hidden lg:block">
          {NavName}
        </span>
      </Link>
    </>
  );
}

export default NavLinks;
