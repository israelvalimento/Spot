import React from "react";
import Exit from "./assets/icons/exit-btn.svg";

import { useState, useEffect } from "react";
import { Button, Heading, Input } from "../components";
export function Edit({ label = "", detail = "", onClick, ref, id = "" }) {
  const [exit, setExit] = useState(false);

  const ExitHadndler = () => {
    setExit((prev) => !prev);
  };

  return (
    <>
      {exit && (
        <div>
          <main
            id="alert"
            className={`fixed z-10 hidden h-lvh w-lvw items-center justify-center bg-[#ffffff10] backdrop-blur-xs`}
          >
            <section className="relative flex w-92 flex-col justify-center gap-5 rounded-lg bg-black">
              <article className="mb-auto pt-2 pr-2">
                <img
                  onClick={ExitHadndler}
                  className="size-7.5 cursor-pointer place-self-end"
                  src={Exit}
                  alt="exit-icon"
                />
              </article>
              <Heading className="poppins text-center uppercase">
                Edit mode{" "}
              </Heading>
              <article className="poppins my-auto flex h-full flex-col items-center justify-center gap-y-5 p-5">
                <div className="flex w-72 flex-col gap-y-2.5">
                  <label htmlFor="Name">Item name</label>
                  <Input id="Name" type="text" className="poppins" />
                </div>
                <div className="flex w-72 flex-col gap-y-2.5">
                  <label htmlFor="Type">Item Type</label>
                  <Input id="Type" type="text" className="poppins" />
                </div>
                <div className="flex w-72 flex-col gap-y-2.5">
                  <label htmlFor="QTYs">Quantity</label>
                  <Input id="Qty" type="text" className="poppins" />
                </div>
              </article>
              <article className="flex justify-center gap-5 p-5">
                <Button className="primary-bg">save edit</Button>
                <Button onClick={ExitHadndler} className="bg-[red]">
                  cancel
                </Button>
              </article>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
