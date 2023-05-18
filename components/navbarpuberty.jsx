"use client";
import React from "react";
import Link from "next/link";
const Navbarpuberty = ({intro, female, male, pubwel}) => {
    return (
      <nav className="flex flex-row w-screen overflow-x-hidden bg-[#e2b714] h-20 text-white text-lg font-bold sticky top-0 z-[10] gap-[28rem]">
        <div className="my-auto w-auto ml-[3rem] flex flex-row justify-center text-center text-3xl">
            PUBERTY
        </div>
        <ul className="flex flex-row my-auto text-2xl">
          <li className="hover:bg-[#333652] p-6"
           onClick={() =>
            window.scrollTo({
              top: intro.current.offsetTop - 80,
              behavior: "smooth",
            })
          }>Introduction</li>
          <li className="hover:bg-[#333652] p-6"
           onClick={() =>
            window.scrollTo({
              top: female.current.offsetTop - 80,
              behavior: "smooth",
            })
          }>Female</li>
          <li className="hover:bg-[#333652] p-6"
           onClick={() =>
            window.scrollTo({
              top: male.current.offsetTop - 80,
              behavior: "smooth",
            })
          }>Male</li>
          <li className="hover:bg-[#333652] p-6"
           onClick={() =>
            window.scrollTo({
              top: pubwel.current.offsetTop - 80,
              behavior: "smooth",
            })
          }>Puberty Wellness</li>
        </ul>
        <div className="my-auto w-auto flex flex-row justify-center text-center text-3xl">
            <Link href="/userui">
            <button className="button my-auto rounded-xl w-[8rem] h-[3rem] bg-[#235797c3] hover:bg-[#333652] text-white">HOME</button>
            </Link>
        </div>
      </nav>
  );
};
export default Navbarpuberty;
