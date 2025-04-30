import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex-center mt-5 w-42 cursor-pointer rounded-lg px-3 py-5 leading-2.5 lg:w-3/7`}
    >
      {children}
    </button>
  );
}
