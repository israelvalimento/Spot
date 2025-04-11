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
import { ImgBtn } from "../components/inputs/ImgBtn";

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
            <Heading className="mate-sc md:hidden lg:block">
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
      <main className="overflow-x-hidden px-5 py-8 md:ml-[9.3%] md:pr-8 lg:ml-[16.7%]">
        <section className="text-center md:ml-20 md:text-left">
          <Heading className="poppins px-5 font-semibold">Add Item's</Heading>

          {/* ADDING ITEMS USER INPUTS ELEMENTS ARTICLE */}
          <article className="mt-20 space-x-3 px-5 md:space-x-5">
            <Input
              className="poppins w-30 text-white placeholder:text-white"
              placeholder="Item name"
            ></Input>
            <Input
              className="poppins w-28 text-white placeholder:text-white"
              placeholder="Item type"
            ></Input>
            <DropDown className="mt-5 w-15 md:w-32"></DropDown>
            <ImgBtn
              className="size-9.5 md:ml-5 md:size-11.5"
              src="/add-icon.svg"
            />
            <ImgBtn className="size-9.5 md:size-11.5" src="/del-icon.svg" />
          </article>
          {/* ADDING ITEMS USER INPUTS ELEMENTS ARTICLE */}

          <Heading className="poppins mx-auto mt-25 w-80 bg-black font-semibold text-nowrap md:mx-0 md:w-82 md:px-5">
            Added list's
          </Heading>
          <hr className="absolute top-132 left-0 z-[-1] w-full md:top-95.5 lg:top-84" />
        </section>

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
