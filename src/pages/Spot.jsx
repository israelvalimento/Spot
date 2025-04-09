import React, { useState } from "react";
import {
  Header,
  NavBar,
  NavLinks,
  Heading,
  Navtitle,
  ItemHeading,
  ItemList,
} from "../components/components";
import { LinkDetails } from "../components/layout/SideBarLink";
import { ScreenWidth, ItemData } from "../hooks/hooks";

export function Spot() {
  const [link] = useState(LinkDetails);
  const routes = ["/home", "/Add_Item", "/Inventory"];
  const Width = ScreenWidth();
  const items = ItemData();

  return (
    <>
      {Width <= 772 && <Header />}

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
      <main className="md:ml-[9.3%] lg:ml-[16.7%] overflow-x-hidden px-5 pr-8 py-8">
        <ItemHeading></ItemHeading>

        {items.map((list) => (
          <ItemList
            key={list.id}
            name={list.item_name}
            type={list.item_type}
            date={list.date.slice(0, list.date.indexOf("T"))}
            qty={list.qty}
          />
        ))}
      </main>
    </>
  );
}
