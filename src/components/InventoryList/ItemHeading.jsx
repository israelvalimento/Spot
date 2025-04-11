import React from "react";

export function ItemHeading() {
  return (
    <table className="poppins my-7 w-full lg:mt-5 lg:mb-20">
      <tr className="flex w-full justify-around py-5 text-sm leading-relaxed md:gap-x-5 lg:px-5 lg:pl-32">
        <th className="text-left md:text-left lg:w-full lg:text-left">
          Item name
        </th>
        <th className="text-left md:text-center lg:w-full lg:text-left">
          Item type
        </th>
        <th className="text-left md:text-center lg:w-full lg:text-left">
          Date added
        </th>
        <th className="text-right md:text-center lg:w-full lg:text-left">
          Qty
        </th>
      </tr>
    </table>
  );
}
