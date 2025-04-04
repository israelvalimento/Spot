import React, { useState } from "react";
import { NavBar, NavLinks, Heading, Navtitle } from "../components/components";

import { LinkDetails } from "../components/layout/SideBarLink";
export function Spot() {
  const [link] = useState(LinkDetails);
  const routes = ["home", "AddItem", "Inventory"];
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
      <main></main>
    </>
  );
}
