import { useEffect, useState } from "react";

export function ScreenWidth() {
  const [Width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handlesize = () => {
      setWidth(window.innerHeight);
    };

    window.addEventListener("resize", handlesize);
    return () => window.removeEventListener("resize", handlesize);
  }, []);

  return Width;
}
