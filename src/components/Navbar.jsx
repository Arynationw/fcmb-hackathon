import React from "react";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "clients",
      title: "Clients",
    },
  ];
  const menu = <Bars3BottomRightIcon className="h-8 w-8 " />;
  const close = <XMarkIcon className="h-8 w-8 " />;
  return (
    <div className="py-6 flex ">
      <div className="pr-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9l4U-hgjlxwMetnNcpVbN0fl-ZuWXWqNyhkgDccF&s"
          alt=""
          className="rounded-full w-12 h-12 inline-block"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <h2>Hi, Martins</h2>
          <p>FCMB lender</p>
        </div>

        <div className="absolute right-4" onClick={() => setToggle(!toggle)}>
          {toggle ? close : menu}
        </div>
        <div
          className={`${
            !toggle && "hidden"
          } bg-fcmb py-2 absolute right-5 top-16 rounded`}
        >
          {/* className="list-none sm:flex hidden justify-end items-center flex-1" */}
          <ul className="">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins pl-2 font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
