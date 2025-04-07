import React from "react";

export function Header({ className = "" }) {
  return (
    <main className="w-full md:hidden lg:hidden">
      <header
        className={`flex outline-1 outline-[#b6b6b6] py-7.5 px-8 justify-between items-center w-full`}
      >
        <img className="cursor-pointer size-7.5" src="/menu.svg" alt="" />
        <p className="cursor-pointer  text-3xl mate-sc font-semibold">SPOT</p>
        <img
          className="cursor-pointer size-7.5"
          src="/UserProfile.svg"
          alt=""
        />
      </header>
    </main>
  );
}
