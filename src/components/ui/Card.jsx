export function Card({
  children,
  className = "",
  radius = "",
  border = "",
  display = "",
}) {
  const FrameLayout = {
    Responive: "h-100 w-200",
  };

  const RadiusSize = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    xxl: "rounded-2xl",
    full: "rounded-full",
  };

  const FrameOutline = {
    outline: "outline-1",
  };

  const position = {
    center: "flex-center-col",
  };
  return (
    <main
      className={`${RadiusSize[radius]} ${FrameOutline[border]} ${position[display]} ${className} w-1/3 md:w-1/3 lg:w-1/4`}
    >
      {children}
    </main>
  );
}
