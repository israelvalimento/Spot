import React from "react";

export function Alert({ children, visible }) {
  return (
    <>
      <main
        className={`relative z-10 w-82 px-10 py-5 rounded-2xl flex-center-col bg-amber-200 gap-5`}
      >
        <section>
          <img
            className={`absolute border-1 top-2 right-2 size-7 cursor-pointer`}
            alt=""
          />
        </section>
        {children}
        <section>
          <img className="size-10 animate-spin" alt="" />
        </section>
      </main>
    </>
  );
}

export function ErrorText({ children }) {
  return <h1 className="text-5xl text-center ">{children}</h1>;
}

export function ErrorDetails({ children }) {
  return <p className="text-center  text-2xl">{children}</p>;
}
