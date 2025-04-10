import React from "react";

export function Heading({ children, font = "", className = "" }) {
  return (
    <>
      <h1 className={`${font} ${className} text-5xl lg:text-5xl`}>
        {children}
      </h1>
    </>
  );
}
