import React from "react";

export function Alert({ children }) {
  return (
    <>
      <main
        className={`flex-center-col relative z-10 w-82 gap-5 rounded-2xl bg-amber-200 px-10 py-5`}
      >
        <section>
          <img
            className={`absolute top-2 right-2 size-7 cursor-pointer border-1`}
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
  return <h1 className="text-center text-5xl">{children}</h1>;
}

export function ErrorDetails({ children }) {
  return <p className="text-center text-2xl">{children}</p>;
}
