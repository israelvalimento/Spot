import React from "react";

export function ItemList({ name, type, date, qty }) {
  return (
    <table className="flex w-full  even:bg-[#d9d9d93a] my-3 rounded-lg">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr className="w-full flex gap-7.5 md:gap-x-5 justify-around lg:pl-32 py-5 px-5">
        <td className="text-left md:text-left lg:text-left w-full">{name}</td>
        <td className="text-center md:text-center lg:text-left w-full">
          {type}
        </td>
        <td className="text-nowrap text-right md:text-center lg:text-left w-full">
          {date}
        </td>
        <td className="text-right md:text-center lg:text-left w-full">{qty}</td>
      </tr>
    </table>
  );
}
