import React, { use, useState } from "react";
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
  const [hidden, setHidden] = useState(false);

  const ClickHandler = () => {
    setHidden((prev) => !prev);
  };

  return (
    <>
      {Width <= 767 && <Header onClick={ClickHandler} />}

      {(hidden || Width >= 768) && (
        <NavBar>
          <Navtitle>
            <Heading className="mate-sc  md:hidden lg:block">
              {Width <= 768 && hidden ? "Hi israel" : "SPOT"}
            </Heading>
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
      )}
      <main className="md:ml-[9.3%] lg:ml-[16.7%] overflow-x-hidden px-5 md:pr-8 py-8">
        <ItemHeading></ItemHeading>

        {items.map((list) => (
          <>
            <ItemList
              key={list.id}
              name={list.item_name}
              type={list.item_type}
              date={list.date.slice(0, list.date.indexOf("T"))}
              qty={list.qty}
            />
          </>
        ))}
      </main>
    </>
  );
}
