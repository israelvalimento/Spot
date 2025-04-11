import React from "react";

export function ItemHeading() {
  return (
    <table className="w-full poppins my-7 lg:mt-5  lg:mb-20 ">
      <tr className="w-full text-sm flex justify-around leading-relaxed md:gap-x-5 lg:pl-32 py-5 lg:px-5">
        <th className="text-left md:text-left lg:text-left lg:w-full">
          Item name
        </th>
        <th className="text-left md:text-center lg:text-left lg:w-full">
          Item type
        </th>
        <th className="text-left md:text-center lg:text-left lg:w-full">
          Date added
        </th>
        <th className="text-right md:text-center lg:text-left lg:w-full">
          Qty
        </th>
      </tr>
    </table>
  );
}
