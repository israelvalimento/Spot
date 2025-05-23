import React, { use, useEffect, useMemo, useRef, useState } from "react";
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
  Alert,
  Edit,
} from "../components/components";
import { LinkDetails } from "../components/layout/SideBarLink";
import { ScreenWidth, ItemData } from "../hooks/hooks";
import { ImgBtn } from "../components/inputs/ImgBtn";
import { useSpotContex } from "../context/SpotProvider";

export function Add_Item() {
  const [link] = useState(LinkDetails);
  const routes = ["/Home", "/Add_Item", "/Inventory"];
  const Width = ScreenWidth();
  const items = ItemData();
  const {
    hidden,
    setHidden,
    modal,
    setModal,
    save,
    setSave,
    EditHandler,
    SaveHandler,
  } = useSpotContex();
  const DelHandler = (index) => {
    alert(`Delete: ${index}`);
  };

  const [addItems, setaddItems] = useState({
    Item_ID: "",
    ItemName: "",
    ItemType: "",
    Qty: "",
  });
  const [lastItemId, setLastItemId] = useState(0);
  const ChangeHandler = (e) => {
    setLastItemId((prev) => prev + 1);
    setaddItems({
      ...addItems,
      Item_ID: lastItemId,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(addItems);
  }, [addItems]);

  return (
    <>
      {modal && <Edit onSave={SaveHandler} onExit={() => setModal(false)} />}
      {save && (
        <Alert
          onExit={() => setSave(false)}
          onConfirm={() => {
            setSave(false);
            setModal(false);
          }}
          label="Already Done?"
          detail="are you sure want to save it"
        />
      )}

      {Width <= 764 && (
        <Header
          onClick={() => {
            setHidden((prev) => !prev);
            console.log(hidden);
          }}
        />
      )}

      {(Width >= 768 || hidden) && (
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
            <Input
              name="ItemName"
              className="w-full md:w-64"
              placeholder="Item name"
              onChange={ChangeHandler}
            />
            <Input
              name="ItemType"
              className="w-full md:w-64"
              placeholder="Item type"
              onChange={ChangeHandler}
            />
            <DropDown
              name="Qty"
              onChange={ChangeHandler}
              className="w-full md:w-22"
            />

            {Width >= 776 ? (
              <>
                <section className="flex justify-center gap-5 md:ml-3 md:gap-3">
                  <ImgBtn
                    onClick={() => console.log(addItems)}
                    src="/add-icon.svg"
                  />
                </section>
              </>
            ) : (
              <>
                <section className="flex justify-center gap-5 md:ml-3 md:gap-3">
                  <Button
                    onClick={() => console.log(addItems)}
                    className="poppins primary-bg font-semibold"
                  >
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

        <ItemHeading />
        {items.length <= 0 ? (
          <div className="flex items-center text-8xl">no item added....</div>
        ) : (
          items.map((list, index) => (
            <div key={list.id} className="flex items-center">
              <ItemList
                name={list.item_name}
                type={list.item_type}
                date={list.date.slice(0, list.date.indexOf("T"))}
                qty={list.qty + " pc's"}
              />
              <div className="absolute right-[2%] hidden gap-3.5 md:hidden lg:flex">
                {list.id && (
                  <>
                    <ImgBtn
                      onClick={EditHandler}
                      className="size-8.5"
                      src="/edit-icon.svg"
                    />
                    <ImgBtn
                      onClick={() => DelHandler(index)}
                      className="size-8.5"
                      src="/del-icon.svg"
                    />
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </main>
      <Popover />
    </>
  );
}
