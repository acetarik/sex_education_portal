"use client";
import React from "react";
import Link from "next/link";
const Navbarharassment = ({intro,types,report,prevent,safe}) => {
    return (
      <nav className="flex flex-row w-screen overflow-x-hidden bg-[#315729] h-20 text-white text-lg font-bold sticky top-0 z-[10] gap-[12rem]">
        <div className="my-auto w-auto ml-[3rem] flex flex-row justify-center text-center text-3xl">
            HARASSMENT
        </div>
        <ul className="flex flex-row my-auto text-2xl">
          <li className="hover:bg-[#7d9b76] p-6"  onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: intro.current.offsetTop ,
                behavior: "smooth",
              })
            }>Introduction</li>
          <li className="hover:bg-[#7d9b76] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: types.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          
          >Types</li>
          <li className="hover:bg-[#7d9b76] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: report.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          
          >Reporting Harassment</li>
          <li className="hover:bg-[#7d9b76] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: prevent.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          
          >Prevention</li>
          <li className="hover:bg-[#7d9b76] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: safe.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          
          >Online Safety</li>
        </ul>
        <div className="my-auto w-auto mr-[3rem] flex flex-row justify-center text-center ml-[3rem] text-3xl">
            <Link href="/userui">
            <button className="button my-auto rounded-xl w-[8rem] h-[3rem] bg-[#11761dc0] hover:bg-[#7d9b76] text-white">HOME</button>
            </Link>
        </div>
      </nav>
  );
};
export default Navbarharassment;
