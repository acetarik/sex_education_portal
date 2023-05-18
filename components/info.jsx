"use client";
import React from "react";
import Image from "next/image";
import image1 from "../assets/less_than_5.png";
import { useContext } from "react";
import image2 from "../assets/increasing_trend.png";
import image3 from "../assets/190000.png";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
export default function Info() {
  const { statrefs } = useContext(GlobalContext);
  return (
    <div
      className="bg-[#fcfaf4] h-auto mx-auto w-screen text-center flex justify-center flex-col p-3"
      ref={statrefs}
    >
      <h1 className="mainpageheadings text-[#258730f4]">Statistics</h1>
      <div className="flex flex-col">
        <div className="flex flex-rox ml-[4rem] mr-[4rem] gap-[5rem] relative mt-[-6%]">
          <Image className="scale-[0.6]" src={image1}></Image>
          <Image className="scale-[0.6]" src={image2}></Image>
          <Image className="scale-[0.8]" src={image3}></Image>
        </div>
        <div className="flex flex-rox ml-[4rem] mr-[4rem] gap-14 relative mt-[-70px] text-centre mb-10">
          <h1 className="text-[#2c7435]">
            According to UNESCO, less than 5% of Pakistani schools offer Sex Ed
            programs.
          </h1>
          <h1 className="text-[#2c7435] ml-6">
            Limited access to reproductive healthcare services in Pakistan leads
            to higher rates of unwanted pregnancies.
          </h1>
          <h1 className="text-[#2c7435]">
            In 2018, Pakistan had 190,000 people living with HIV, indicating a
            significant burden of sexually transmitted infections.
          </h1>
        </div>
      </div>
    </div>
  );
}
