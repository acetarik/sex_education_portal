"use client";
import React from "react";
import Link from "next/link";
export default function Navfam ({intro,fert,fin,bc,p}) {
    return (
      <nav className="flex flex-row w-screen overflow-x-hidden bg-[#835891] h-20 text-white text-lg font-bold sticky top-0 z-[10] gap-[14rem]">
        <div className="my-auto w-auto ml-[3rem] flex flex-row justify-center text-center text-3xl">
            FAMILY PLANNING
        </div>
        <ul className="flex flex-row my-auto text-2xl">
          <li className="hover:bg-[#500c12] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: intro.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Introduction</li>
          <li className="hover:bg-[#500c12] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: fert.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Fertility</li>
          <li className="hover:bg-[#500c12] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: fin.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Finance</li>
          <li className="hover:bg-[#500c12] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: bc.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Birth Control</li>
          <li className="hover:bg-[#500c12] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: p.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Pregnancy</li>
        </ul>
        <div className="my-auto w-auto mr-[3rem] flex flex-row justify-center text-center ml-[3rem] text-3xl">
            <Link href="/userui">
            <button className="button my-auto rounded-xl w-[8rem] h-[3rem] bg-[#532f60] hover:bg-[#9f75ad] text-white">HOME</button>
            </Link>
        </div>
      </nav>
  );
}


