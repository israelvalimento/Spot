import React from "react";
import { useLocation } from "react-router-dom";
import { ImgBtn } from "../inputs/ImgBtn";
export function ItemList({ name, type, date, qty }) {
  const location = useLocation();

  return (
    <table className="flex w-full  odd:bg-[#d9d9d93a] my-3 rounded-lg">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>

      <tr className="w-full flex gap-7.5 md:gap-x-5 items-center justify-around lg:pl-32 py-5 px-6.5 leading-loose">
        {location.pathname == "/Home" ? (
          <>
            <td className="text-left md:text-left lg:text-left w-full">
              {name}
            </td>
            <td className="text-center md:text-center lg:text-left w-full">
              {type}
            </td>
            <td className="text-right md:text-center lg:text-left w-full">
              {date}
            </td>
            <td className="text-right md:text-center lg:text-left w-full">
              {qty}
            </td>
          </>
        ) : (
          <>
            <td className="text-left md:text-left lg:text-left w-full">
              {name}
            </td>
            <td className="text-center md:text-center lg:text-left w-full">
              {type}
            </td>
            <td className="text-right md:text-center lg:text-left w-full">
              {date}
            </td>
            <td className="text-right  md:text-center lg:text-left w-full">
              {qty}
            </td>
            <ImgBtn
              className="absolute right-52 size-8.5"
              src="/edit-icon.svg"
            />
            <ImgBtn
              className="absolute right-38 size-8.5"
              src="/del-icon.svg"
            />
          </>
        )}
      </tr>
    </table>
  );
}
