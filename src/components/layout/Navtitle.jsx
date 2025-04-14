import React from "react";
import { Link } from "react-router-dom";

export function Navtitle({ children }) {
  return (
    <section className="mb-6.5 p-3.5 leading-5 md:mb-8.5">
      <Link to={"/Home"}>
        <img
          className="aspec-square hidden size-7 scale-3d cursor-pointer object-center md:block lg:hidden"
          src="/nav-logo.png"
          alt=""
        />
      </Link>
      {children}
    </section>
  );
}
