import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Blogs",
    link: "/#blog",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2l uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center  gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-grey-500 hover:text-black dark:hover:text-white duration-200 relative z-40"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* DropDown */}
                <li className="relative curser-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quik Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* DropDown Links */}
                  <div className="absolute cursor-pointer z-[9999] hidden group-hover:block w-[200px] bg-white shadow-md rounded-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li>
                          <a
                            className="text-grey-500 inline-block w-full dark:hover:text-white duration-200 font-semibold p-2 hover:bg-primary/20 rounded-md font-mono"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-grey-600 group-hover:text-primary: dark:text-grey-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Order-Button-Section */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-600 " />
              <div className="h-4 w-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
