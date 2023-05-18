"use client";
import React from "react";
import Link from "next/link";
const Navbarinfopage = ({intro,female,male,inter,conc}) => {
    return (
      <nav className="flex flex-row w-screen overflow-x-hidden bg-[#e2b714] h-20 text-white text-lg font-bold sticky top-0 z-[10] gap-[17rem]">
        <div className="my-auto w-auto ml-[3rem] flex flex-row justify-center text-center text-3xl">
            GENDER ANATOMY
        </div>
        <ul className="flex flex-row my-auto text-2xl">
          <li className="hover:bg-[#258730] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: intro.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Introduction</li>
          <li className="hover:bg-[#258730] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: female.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Female</li>
          <li className="hover:bg-[#258730] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: male.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Male</li>
          <li className="hover:bg-[#258730] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: inter.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Intersex</li>
          <li className="hover:bg-[#258730] p-6"
           onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: conc.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >Conclusion</li>
        </ul>
        <div className="my-auto w-auto ml-[5rem] flex flex-row justify-center text-center text-3xl">
            <Link href="/userui">
            <button className="button my-auto rounded-xl w-[8rem] h-[3rem] bg-[#11761dc0] hover:bg-[#7d9b76] text-white">HOME</button>
            </Link>
        </div>
      </nav>
  );
};
export default Navbarinfopage;
