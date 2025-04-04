import React from "react";
import { Link } from "react-router-dom";

export function Goto({ children, to = "", className = "" }) {
  return (
    <Link to={to} className={`${className}  text-blue-400 cursor-pointer`}>
      {children}
    </Link>
  );
}
