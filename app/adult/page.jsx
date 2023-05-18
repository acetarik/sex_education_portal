"use client"
import React from "react";
import Pyarisidebar from "../../components/pyarisidebar";
import Image from "next/image";
import image1 from "../../assets/familyplanning.png";
import image2 from "../../assets/pregnancy.png";
import image3 from "../../assets/harrasment.png";
import Link from "next/link";

const Adult = () => {
  return (
    <div className="flex flex-row w-screen">
      <Pyarisidebar/>
      <div className="flex flex-col text-center w-screen justify-around">
      <h1 className="infopagetitle mb-0 text-[#a62629]">Adults</h1>
      <div className="flex flex-row justify-center items-center flex-grow gap-10 mt-[-5%]">
      {/* <div className="cardui adult card1">
          <Image
            src={image2}
            alt="image1"
            className="w-[100%] h-[100%] object-cover rounded-2xl"
          />
        </div> */}
        <Link href="/harassment_adult">
        <div className="cardui adult card2">
          <Image
            src={image3}
            alt="image1"
            className="w-[100%] h-[100%] object-cover rounded-2xl"
            />
        </div>
        </Link>
        <Link href="/famplan">
        <div className="cardui adult card3 font-Raleway">
          <Image
            src={image1}
            alt="image1"
            className="w-[100%] h-[100%] object-cover rounded-2xl"
            />
        </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Adult;
