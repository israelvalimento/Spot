import React from "react";

export function ImgBtn({ className = "", src = "", alt }) {
  return (
    <img className={`${className} flex cursor-pointer`} src={src} alt="" />
  );
}
