export function Input({ placeholder = "", type = "", className = "", ref }) {
  return (
    <input
      className={`${className}  poppins placeholder:-tracking-tighter rounded-lg border-1 px-3 py-3 leading-2`}
      placeholder={placeholder}
      type={type}
      ref={ref}
    ></input>
  );
}
