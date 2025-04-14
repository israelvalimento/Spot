import React from "react";
import { useLocation } from "react-router-dom";
import { ImgBtn } from "../inputs/ImgBtn";
export function ItemList({ name, type, date, qty }) {
  const location = useLocation();

  return (
    <table className="my-3 flex w-full rounded-lg odd:bg-[#d9d9d93a]">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className="my-3 flex w-full rounded-lg">
        <tr className="relative flex w-full items-center justify-around gap-8.5 px-6.5 py-3.5 leading-loose md:gap-7.5">
          {location.pathname == "/Home" ? (
            <>
              <td className="w-22 text-left md:text-left lg:w-full lg:text-left">
                {name}
              </td>
              <td className="text-left md:text-center lg:w-full lg:text-left">
                {type}
              </td>
              <td className="text-left text-nowrap md:text-center lg:w-full lg:text-left">
                {date}
              </td>
              <td className="text-left md:text-center lg:w-full lg:text-left">
                {qty}
              </td>
            </>
          ) : (
            <>
              <td className="w-22 text-left md:text-left lg:w-full lg:text-left">
                {name}
              </td>
              <td className="text-left md:text-center lg:w-full lg:text-left">
                {type}
              </td>
              <td className="text-left md:text-center lg:w-full lg:text-left">
                {date}
              </td>
              <td className="text-left md:text-center lg:w-full lg:text-left">
                {qty}
              </td>
              <td className="absolute right-[2%] hidden gap-3.5 md:hidden lg:flex">
                <ImgBtn className="size-8.5" src="/edit-icon.svg" />
                <ImgBtn className="size-8.5" src="/del-icon.svg" />
              </td>
            </>
          )}
        </tr>
      </tbody>
    </table>
  );
}
