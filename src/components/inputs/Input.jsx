export function Input({
  placeholder = "",
  type = "",
  className = "",
  onChange,
  ref,
  name = "",
}) {
  return (
    <input
      className={`${className} poppins rounded-lg border-1 px-3 py-3 leading-2 text-white placeholder:-tracking-tighter placeholder:text-white`}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      ref={ref}
      name={name}
    ></input>
  );
}
