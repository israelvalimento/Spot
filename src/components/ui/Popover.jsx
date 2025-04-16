import React from "react";
import { useState } from "react";
import { Button } from "../components";
export function Popover() {
  const [pull, setPull] = useState(false);
  const pullHandler = () => {
    setPull((prev) => !prev);
  };

  return (
    <>
      <div className="fixed bottom-25 flex w-full justify-center md:pl-22 lg:pl-50">
        <img
          onClick={pullHandler}
          className={`${pull ? "block" : "translate-y-[100px] rotate-[-0deg]"} size-10 rotate-180 cursor-pointer duration-500 hover:animate-bounce`}
          src="
        /pull-up-icon.svg"
          alt=""
        />
      </div>
      <section
        className={`${pull ? "block" : "translate-y-[100px]"} fixed bottom-0 flex w-full items-center justify-center overflow-hidden bg-[#00000069] outline-1 outline-[#b6b6b663] backdrop-blur-sm duration-500 md:pr-8 md:pl-[9.3%] lg:pl-[16.7%]`}
      >
        <div className="flex items-center gap-5 overflow-hidden pb-3.5 lg:w-1/2">
          <Button className="primary-bg">Confirm</Button>
          <Button className="bg-[red]">DELETE ALL</Button>
        </div>
      </section>
    </>
  );
}
