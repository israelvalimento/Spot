import React from "react";

export function ImgBtn({ className = "", src = "", onClick, alt }) {
  return (
    <img
      onClick={onClick}
      className={`${className} flex cursor-pointer`}
      src={src}
      alt=""
    />
  );
}
