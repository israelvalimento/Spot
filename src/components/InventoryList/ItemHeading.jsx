import React from "react";

export function ItemHeading() {
  return (
    <table className="poppins my-5 flex w-full text-[12px] text-nowrap md:my-10 md:text-lg">
      <thead className="poppins my-5 flex w-full text-[12px] text-nowrap md:my-10 md:text-lg">
        <tr className="relative flex w-full items-center justify-around gap-7.5 px-7 py-5 md:px-6.5">
          <th className="text-left md:text-left lg:w-full lg:text-left">
            Item name
          </th>
          <th className="text-left md:text-center lg:w-full lg:text-left">
            Item type
          </th>
          <th className="text-left md:text-center lg:w-full lg:text-left">
            Date added
          </th>
          <th className="text-left md:text-center lg:w-full lg:text-left">
            Qty
          </th>
        </tr>
      </thead>
    </table>
  );
}
