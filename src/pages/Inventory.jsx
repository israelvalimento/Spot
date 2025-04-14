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
  Popover,
} from "../components/components";
import { LinkDetails } from "../components/layout/SideBarLink";
import { ScreenWidth, ItemData } from "../hooks/hooks";
import { ImgBtn } from "../components/inputs/ImgBtn";

export function Inventory() {
  const [link] = useState(LinkDetails);
  const routes = ["/Home", "/Add_Item", "/Inventory"];
  const Width = ScreenWidth();
  const items = ItemData();
  const [hidden, setHidden] = useState(false);
  const [pull, setPull] = useState(false);
  const pullHandler = () => {
    setPull((prev) => !prev);
  };

  const ClickHandler = () => {
    setHidden((prev) => !prev);
  };

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
        <section className="text-center md:ml-8.5 md:text-left lg:ml-22">
          <Heading className="poppins font-semibold md:px-5">
            Sort Item's
          </Heading>

          {/* ADDING ITEMS USER INPUTS ELEMENTS ARTICLE */}
          <article className="my-20 flex w-full flex-col gap-3 px-5 md:h-12 md:flex-row">
            <Input className="w-full md:w-64" placeholder="Item name"></Input>
            <Input className="w-full md:w-64" placeholder="Item type"></Input>
            <Input className="w-full md:w-22" placeholder="Qty" />

            {Width >= 776 ? (
              <>
                <section className="flex items-center md:ml-3 md:h-12">
                  <ImgBtn className="" src="/search-btn.svg" />
                </section>
              </>
            ) : (
              <>
                <section className="x flex justify-center gap-5 md:ml-3">
                  <ImgBtn src="/search-btn.svg" />
                </section>
              </>
            )}
          </article>
          {/* ADDING ITEMS USER INPUTS ELEMENTS ARTICLE */}

          <section className="relative z-[-1] w-full">
            <Heading className="poppins mx-auto w-80 bg-black font-semibold text-nowrap md:mx-0 md:w-68.5 md:px-5">
              Inventory
            </Heading>
            <hr className="absolute top-7 left-0 z-[-1] w-full text-[#b6b6b663] md:w-lvw md:translate-x-[-110px]" />
          </section>
        </section>

        <ItemHeading></ItemHeading>
        {items.map((list, index) => (
          <ItemList
            key={index}
            name={list.item_name}
            type={list.item_type}
            date={list.date.slice(0, list.date.indexOf("T"))}
            qty={list.qty + " pc's"}
          />
        ))}
      </main>
      <Popover onClick={pullHandler} popover={pull} />
    </>
  );
}
