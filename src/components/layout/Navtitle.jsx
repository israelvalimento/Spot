import React from "react";

export function Navtitle({ children }) {
  return (
    <section className="p-3.5 mb-6.5 md:mb-8.5 leading-5">
      <img
        className="object-center size-10 hidden md:block lg:hidden cursor-pointer"
        src="/nav-logo.png"
        alt=""
      />
      {children}
    </section>
  );
}
