export function Input({ placeholder = "", type = "", className = "", ref }) {
  return (
    <input
      className={`${className} poppins rounded-lg border-1 px-3 py-3 leading-2 text-white placeholder:-tracking-tighter placeholder:text-white`}
      placeholder={placeholder}
      type={type}
      ref={ref}
    ></input>
  );
}
