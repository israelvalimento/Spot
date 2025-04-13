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
  const [pull, setPull] = useState(false);
  const pullHandler = () => {
    setPull((prev) => !prev);
  };

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
        <section className="text-center md:ml-8.5 md:text-left lg:ml-22">
          <Heading className="poppins font-semibold md:px-5">
            Add Item's
          </Heading>

          {/* ADDING ITEMS USER INPUTS ELEMENTS ARTICLE */}
          <article className="my-20 flex w-full flex-col gap-3 px-5 md:h-12 md:flex-row">
            <Input className="w-full md:w-64" placeholder="Item name"></Input>
            <Input className="w-full md:w-64" placeholder="Item type"></Input>
            <DropDown className="w-full md:w-22" />

            {Width >= 776 ? (
              <>
                <section className="flex justify-center gap-5 md:ml-3 md:gap-3">
                  <ImgBtn src="/add-icon.svg" />
                </section>
              </>
            ) : (
              <>
                <section className="flex justify-center gap-5 md:ml-3 md:gap-3">
                  <Button className="poppins primary-bg font-semibold">
                    ADD
                  </Button>
                </section>
              </>
            )}
          </article>
          {/* ADDING ITEMS USER INPUTS ELEMENTS ARTICLE */}

          <section className="relative z-[-1] w-full">
            <Heading className="poppins mx-auto w-80 bg-black font-semibold text-nowrap md:mx-0 md:w-82 md:px-5">
              Added list's
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
            qty={list.qty}
          />
        ))}
      </main>
      <div className="fixed bottom-30 flex w-full justify-center md:pl-22 lg:pl-50">
        <img
          onClick={pullHandler}
          className={`${pull ? "translate-y-[100px] rotate-[-0deg]" : "block"} size-10 rotate-180 cursor-pointer duration-500`}
          src="
        /pull-up-icon.svg"
          alt=""
        />
      </div>
      <section
        className={`${pull ? "translate-y-[100px]" : "block"} fixed bottom-0 flex w-full items-center justify-center overflow-hidden bg-[#00000069] outline-1 outline-[#b6b6b663] backdrop-blur-sm duration-500 md:pr-8 md:pl-[9.3%] lg:pl-[16.7%]`}
      >
        <div className="flex items-center gap-5 overflow-hidden px-5 py-4 lg:w-1/2">
          <Button className="primary-bg">Confirm</Button>
          <Button className="bg-[red]">DELETE ALL</Button>
        </div>
      </section>
    </>
  );
}
