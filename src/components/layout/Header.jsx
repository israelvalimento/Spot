import React from "react";
import { useState } from "react";
export function Header({ className = "", onClick }) {
  return (
    <main className={`z-20 w-full md:hidden lg:hidden`}>
      <header
        className={`z-20 flex w-full items-center justify-between px-8 py-7.5 outline-1 outline-[#b6b6b6]`}
      >
        <img
          onClick={onClick}
          className={`z-100 size-7.5 cursor-pointer`}
          src="/menu.svg"
          alt=""
        />
        <p className="mate-sc cursor-pointer text-3xl font-semibold">SPOT</p>
        <img
          className="size-7.5 cursor-pointer"
          src="/UserProfile.svg"
          alt=""
        />
      </header>
    </main>
  );
}
