import React from "react";
import { useState } from "react";
export function Header({ className = "", onClick }) {
  const [hidden, setHidden] = useState(false);

  const ClickHandler = () => {
    setHidden((prev) => !prev);
    alert("click");
  };

  return (
    <main className={`z-20 w-full md:hidden lg:hidden`}>
      <header
        className={`z-20 flex w-full items-center justify-between px-8 py-7.5 outline-1 outline-[#b6b6b6]`}
      >
        <img
          onClick={ClickHandler}
          className={`size-7.5 cursor-pointer`}
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
