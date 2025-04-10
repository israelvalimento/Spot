import React, { useState, useEffect, use } from "react";
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
import { ScreenWidth, ItemData } from "../hooks/hooks";

export function Add_Item() {
  const [link] = useState(LinkDetails);
  const routes = ["/Home", "/Add_Item", "/Inventory"];
  const Width = ScreenWidth();
  const items = ItemData();
  const [hidden, setHidden] = useState(false);

  const ClickHandler = () => {
    setHidden((prev) => !prev);
  };

  useState(() => {}, [Width]);

  return (
    <>
      {Width <= 764 && <Header onClick={ClickHandler} />}

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

            <img
              className="inline ml-5 size-13 cursor-pointer"
              src="/add-icon.svg"
              alt=""
            />
            <img
              className="inline size-13 cursor-pointer"
              src="/del-icon.svg"
              alt=""
            />
          </article>

          <Heading className="bg-black mt-25 w-82 px-5  poppins font-semibold">
            Added list's
          </Heading>
        </section>
        <hr className="z-[-1] absolute top-84 w-full" />
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
