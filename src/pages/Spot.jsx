import React, { useState, useEffect } from "react";
import {
  NavBar,
  NavLinks,
  Heading,
  Navtitle,
  ItemHeading,
  ItemList,
} from "../components/components";

import { LinkDetails } from "../components/layout/SideBarLink";
export function Spot() {
  const [link] = useState(LinkDetails);
  const routes = ["home", "AddItem", "Inventory"];
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://67f0cd0e2a80b06b8898b1fb.mockapi.io/inventory/listofitems")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  console.log(items);
  return (
    <>
      <NavBar>
        <Navtitle>
          <Heading className="mate-sc hidden lg:block">Spot</Heading>
        </Navtitle>
        {link.map((links, index) => (
          <NavLinks
            to={routes[index]}
            key={links.id}
            src={links.img}
            NavName={links.name}
          />
        ))}
      </NavBar>
      <main className="md:ml-[9.3%] lg:ml-[16.7%] overflow-x-hidden px-5 pr-7 py-8">
        <ItemHeading></ItemHeading>

        {items.map((list) => (
          <ItemList
            key={list.id}
            name={list.item_name}
            type={list.item_type}
            date={list.date}
            qty={list.qty}
          />
        ))}
      </main>
    </>
  );
}
