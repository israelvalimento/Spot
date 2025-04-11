import React from "react";

export function ImgBtn({ className = "", src = "", alt }) {
  return (
    <img className={`${className} inline cursor-pointer`} src={src} alt="" />
  );
}
