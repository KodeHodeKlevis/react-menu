import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoRestaurantSharp } from "react-icons/io5";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
    setIsDropdownOpen(false); // Close dropdown when menu closes
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed w-full bg-white shadow-md z-50">
      <div className="flex flex-row justify-between p-5 md:px-2 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex flex-row items-center cursor-pointer">
          <IoRestaurantSharp size={28} />
          <h1 className="text-xl font-semibold ml-2">Food Web</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link to="/" className="hover:text-brightColor cursor-pointer">
            Home
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link
                to="/dishes"
                className="hover:text-brightColor cursor-pointer"
              >
                Dishes
              </Link>
              <BiChevronDown className="cursor-pointer" size={25} />
            </div>

            {/* Dropdown Menu */}
            <ul className="absolute hidden space-y-3 group-hover:block bg-white border-brightColor rounded-lg p-2 border-solid border-2">
              <li>
                <Link
                  to="/spicy"
                  className="hover:text-brightColor cursor-pointer"
                >
                  Spicy Dishes
                </Link>
              </li>
              <li>
                <Link
                  to="/savoury"
                  className="hover:text-brightColor cursor-pointer"
                >
                  Savoury Dishes
                </Link>
              </li>
              <li>
                <Link
                  to="/desserts"
                  className="hover:text-brightColor cursor-pointer"
                >
                  Desserts
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/about" className="hover:text-brightColor cursor-pointer">
            About
          </Link>
          <Link to="/reviews" className="hover:text-brightColor cursor-pointer">
            Reviews
          </Link>
          <Button title="LogIn" />
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="hover:text-brightColor cursor-pointer"
        >
          Home
        </Link>

        {/* Mobile Dishes Dropdown */}
        <div
          onClick={toggleDropdown}
          className="flex items-center justify-center cursor-pointer hover:text-brightColor"
        >
          Dishes{" "}
          <BiChevronDown
            size={25}
            className={`${
              isDropdownOpen ? "rotate-180" : ""
            } transition-transform duration-200`}
          />
        </div>

        {isDropdownOpen && (
          <ul className="flex flex-col gap-3 text-lg">
            <li>
              <Link
                to="/spicy"
                onClick={closeMenu}
                className="hover:text-brightColor cursor-pointer"
              >
                Spicy Dishes
              </Link>
            </li>
            <li>
              <Link
                to="/savoury"
                onClick={closeMenu}
                className="hover:text-brightColor cursor-pointer"
              >
                Savoury Dishes
              </Link>
            </li>
            <li>
              <Link
                to="/desserts"
                onClick={closeMenu}
                className="hover:text-brightColor cursor-pointer"
              >
                Desserts
              </Link>
            </li>
          </ul>
        )}

        <Link
          to="/about"
          onClick={closeMenu}
          className="hover:text-brightColor cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/reviews"
          onClick={closeMenu}
          className="hover:text-brightColor cursor-pointer"
        >
          Reviews
        </Link>
        <Button title="LogIn" />
      </div>
    </div>
  );
};

export default Navbar;
