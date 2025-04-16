import React from "react";
import Exit from "./assets/icons/exit-btn.svg";

import { useState, useEffect } from "react";
import { Button } from "../components";
export function Alert({ label = "", detail = "", onClick, ref, id = "" }) {
  const [hidden, setHidden] = useState(true);

  const ClickHandler = () => {
    setHidden((prev) => !prev);
  };
  return (
    <>
      {hidden && (
        <div>
          <main
            id="alert"
            className={`fixed z-10 hidden h-lvh w-lvw items-center justify-center bg-[#ffffff10] backdrop-blur-xs`}
          >
            <section className="relative flex size-92 flex-col justify-center gap-5 rounded-lg bg-black">
              <article className="mb-auto h-20 pt-2 pr-2">
                <img
                  onClick={ClickHandler}
                  className="size-7.5 cursor-pointer place-self-end"
                  src={Exit}
                  alt="exit-icon"
                />
              </article>

              <article className="poppins x my-auto flex h-full flex-col gap-y-10 p-5 text-center">
                <p className="text-4xl uppercase">{label}</p>
                <p className="line-clamp-2 first-letter:capitalize">{detail}</p>
              </article>
              <article className="flex justify-center gap-5 p-5">
                <Button className="primary-bg">confirm</Button>
                <Button className="bg-[red]">cancel</Button>
              </article>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
