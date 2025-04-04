import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`${className} poppins rounded-lg flex-center w-42 lg:w-3/7 px-3 py-5 leading-2.5 mt-5 cursor-pointer`}
    >
      {children}
    </button>
  );
}
