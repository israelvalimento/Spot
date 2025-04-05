import React from "react";

export function List({ name, type, date, qty }) {
  return (
    <ul className="list-none py-4 my-3 even:bg-[#d9d9d93a] flex justify-around text-nowrap">
      <li className="w-32 ml-4">{name}</li>
      <li className="">{type}</li>
      <li className="w-42">{date}</li>
      <li className="w-10">{qty}</li>
    </ul>
  );
}
