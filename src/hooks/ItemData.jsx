import { useState, useEffect } from "react";
export function ItemData() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://67f0cd0e2a80b06b8898b1fb.mockapi.io/inventory/listofitems"
      );
      const data = await response.json();
      setItems(data);
    })();
  }, []);

  return items;
}
