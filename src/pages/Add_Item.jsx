import React, { useState, useEffect } from "react";
import {
  Header,
  NavBar,
  NavLinks,
  Heading,
  Navtitle,
  ItemHeading,
  ItemList,
  Input,
  Button,
  DropDown,
} from "../components/components";
import { LinkDetails } from "../components/layout/SideBarLink";
import { ScreenWidth } from "../hooks/ScreenWidth,";

export function Add_Item() {
  const [link] = useState(LinkDetails);
  const routes = ["/Home", "/Add_Item", "/Inventory"];
  const [items, setItems] = useState([]);
  const Width = ScreenWidth();

  useEffect(() => {
    (async()=>{

      const response = await fetch("https://67f0cd0e2a80b06b8898b1fb.mockapi.io/inventory/listofitems");
      const data = await response.json();
      setItems(data);
 
    })();
  }, []);


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
        <section className="ml-20">
          <Heading className="poppins px-5 font-semibold">Add Item's</Heading>
          <article className="mt-20 px-5 space-x-5">
            <Input
              className="poppins text-white placeholder:text-white"
              placeholder="Item name"
            ></Input>
            <Input
              className="poppins text-white placeholder:text-white"
              placeholder="Item type"
            ></Input>
            <DropDown></DropDown>
            <Button>search</Button>
            <Button>search</Button>
          </article>

          <Heading className="bg-black w-82 px-5 poppins font-semibold">
            Added list's
          </Heading>
        </section>
        <hr className="z-[-1] absolute top-94 w-full" />
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
