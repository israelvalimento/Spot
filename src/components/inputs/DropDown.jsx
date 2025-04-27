import arrow_down from "./assets/arrow_down.svg";

export function DropDown({ className = "", ref, name = "", onChange }) {
  return (
    <main className="relative">
      <select
        name={name}
        ref={ref}
        defaultValue={"Qty"}
        onChange={onChange}
        className={`${className} poppins z-20 flex appearance-none rounded-lg border-1 px-3 py-3`}
      >
        <option className="hidden" value="Qty" disabled>
          Qty
        </option>
        <option className="bg-black" value="1">
          1
        </option>
        <option className="bg-black" value="2">
          2
        </option>
        <option className="bg-black" value="3">
          3
        </option>
      </select>

      <img
        className="absolute top-4.5 right-3 size-3.5 md:top-4.5 md:right-2"
        src={arrow_down}
        alt=""
      />
    </main>
  );
}
