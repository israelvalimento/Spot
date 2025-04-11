import arrow_down from "./assets/arrow_down.svg";

export function DropDown({ className = "", ref }) {
  return (
    <main className="inline w-full  relative">
      <select
        className={`${className} z-20 appearance-none poppins rounded-lg border-1 px-3 py-3`}
      >
        <option className="hidden" disabled selected value="">
          Qty
        </option>
        <option className="bg-black" value="1">
          1
        </option>
        <option className="bg-black " value="2">
          2
        </option>
        <option className="bg-black " value="3">
          3
        </option>
      </select>
      <img
        className="z-[-1] size-5 top-0 right-3.5 absolute"
        src={arrow_down}
        alt=""
      />
    </main>
  );
}
