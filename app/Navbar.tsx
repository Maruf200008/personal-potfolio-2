"use client";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <h2 className=" font-bold text-2xl">MMG</h2>
          </Link>
          <button
            onClick={() => setToggle(!toggle)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              toggle ? " block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white gap-5 ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-500 transition  md:p-0 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-500 transition  md:p-0 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-500 transition  md:p-0 "
                >
                  Work
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className=" flex items-center relative bg-gray-200 pl-4 pr-10 py-2 rounded-full justify-between"
                >
                  <p className=" text-left">Contact</p>
                  <div className=" text-[35px] absolute right-[-3px]">
                    <BsArrowRightCircleFill />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
