import React from "react";

export function ItemHeading() {
  return (
    <table className="poppins mt-5 mb-20 p-4 ">
      <tr className="">
        <th className="w-100">Item name</th>
        <th className="w-75">Item type</th>
        <th className="text-right w-83">Date added</th>
        <th className="text-right w-78">Qty</th>
      </tr>
    </table>
  );
}
