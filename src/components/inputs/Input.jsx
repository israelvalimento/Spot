export function Input({ placeholder = "", type = "", className = "", ref }) {
  return (
    <input
      className={`${className} poppins rounded-lg border-1 px-3 py-3 leading-2 placeholder:-tracking-tighter`}
      placeholder={placeholder}
      type={type}
      ref={ref}
    ></input>
  );
}
