"use client";
import React, { useContext } from "react";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
const Sideicon = ({ icon, state }) => {
  // const { gage } = useContext(GlobalContext);
  return (
    <div
      className={`h-20 w-20  hover:bg-[#fcfaf4] text-[3.5rem] ${
        state ? "bg-[#fcfaf4]" : " bg-[#e2b808]"
      } rounded-3xl flex flex-col justify-center text-[#258730]
    text-center items-center`}
    >
      {icon}
    </div>
  );
};

export default Sideicon;
