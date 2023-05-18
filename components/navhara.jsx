"use client";
import React from "react";
import Link from "next/link";
export default function Navhara ({intro,type,pre,leg,sup}) {
    return (
      <nav className="flex flex-row w-screen overflow-x-hidden bg-[#976f6f] h-20 text-white text-lg font-bold sticky top-0 z-[10] gap-[9rem]">
        <div className="my-auto w-auto ml-[3rem] flex flex-row justify-center text-center text-3xl">
           SEXUAL HARASSMENT
        </div>
        <ul className="flex flex-row my-auto text-2xl">
          <li className="hover:bg-[#2c1633] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: intro.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Introduction</li>
          <li className="hover:bg-[#2c1633] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: type.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Types</li>
          <li className="hover:bg-[#2c1633] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: pre.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Prevention Tips</li>
          <li className="hover:bg-[#2c1633] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: leg.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Legal Support</li>
          <li className="hover:bg-[#2c1633] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: sup.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Support Resource</li>
        </ul>
        <div className="my-auto w-auto mr-[3rem] flex flex-row justify-center text-center ml-[3rem] text-3xl">
            <Link href="/userui">
            <button className="button my-auto rounded-xl w-[8rem] h-[3rem] bg-[#673838] hover:bg-[#ab4e4e] text-white">HOME</button>
            </Link>
        </div>
      </nav>
  );
}