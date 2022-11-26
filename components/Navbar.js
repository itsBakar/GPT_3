import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-16">
          <h1 className="text-2xl text-white font-bold font-Manrope">GPT-3</h1>
          <ul className="hidden md:flex gap-11">
            <li className="font-Manrope text-white text-1xl">
              <Link href={"#"}>Home</Link>
            </li>
            <li className="font-Manrope text-white text-1xl">
              <Link href={"#"}>What is GPT?</Link>
            </li>
            <li className="font-Manrope text-white text-1xl">
              <Link href={"#"}>Open AI</Link>
            </li>
            <li className="font-Manrope text-white text-1xl">
              <Link href={"#"}>Case Studies</Link>
            </li>
            <li className="font-Manrope text-white text-1xl">
              <Link href={"#"}>Library</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-6">
          <button className="text-1xl text-white">Sign in</button>
          <button className="text-1xl text-white bg-bright-orange px-10 py-4 rounded">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
