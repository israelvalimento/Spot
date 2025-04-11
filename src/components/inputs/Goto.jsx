import React from "react";
import { Link } from "react-router-dom";

export function Goto({ children, to = "", className = "" }) {
  return (
    <Link to={to} className={`${className} cursor-pointer text-blue-400`}>
      {children}
    </Link>
  );
}
