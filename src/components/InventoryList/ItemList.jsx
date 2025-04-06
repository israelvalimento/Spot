import React from "react";

export function ItemList({ name, type, date, qty }) {
  return (
    <table className="justify-center even:bg-[#d9d9d93a] my-3 rounded-lg  text-nowrap">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr className="py-5 px-5">
        <td className="pl-20 w-122">{name}</td>
        <td className="w-92">{type}</td>
        <td className="w-62">{date}</td>
        <td className="text-center w-92">{qty}</td>
      </tr>
    </table>
  );
}
