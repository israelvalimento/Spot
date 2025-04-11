import React from "react";
import { useLocation } from "react-router-dom";
import { ImgBtn } from "../inputs/ImgBtn";
export function ItemList({ name, type, date, qty }) {
  const location = useLocation();

  return (
    <table className="my-3 flex w-full rounded-lg odd:bg-[#d9d9d93a]">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>

      <tr className="flex w-full items-center justify-around gap-7.5 px-6.5 py-5 leading-loose md:gap-x-5 lg:pl-32">
        {location.pathname == "/Home" ? (
          <>
            <td className="w-full text-left md:text-left lg:text-left">
              {name}
            </td>
            <td className="w-full text-center md:text-center lg:text-left">
              {type}
            </td>
            <td className="w-full text-right md:text-center lg:text-left">
              {date}
            </td>
            <td className="w-full text-right md:text-center lg:text-left">
              {qty}
            </td>
          </>
        ) : (
          <>
            <td className="w-full text-left md:text-left lg:text-left">
              {name}
            </td>
            <td className="w-full text-center md:text-center lg:text-left">
              {type}
            </td>
            <td className="w-full text-right md:text-center lg:text-left">
              {date}
            </td>
            <td className="w-full text-right md:text-center lg:text-left">
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
