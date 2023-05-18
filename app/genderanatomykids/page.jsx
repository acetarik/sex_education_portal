"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbarinfopagek from "../../components/navbarinfopagek";
import Image from "next/image";
import image3 from "../../assets/Skeleton.png";
import image1 from "../../assets/Inside.png";
import image2 from "../../assets/Outside.png";
import image4 from "../../assets/insidemale.png";
import image5 from "../../assets/outsidemale.png";
import image6 from "../../assets/intersex1.png";
import image7 from "../../assets/intersex2.png";
import image8 from "../../assets/externalout.png";
import image9 from "../../assets/internal.png";
import { useRef } from "react";
import Link from "next/link";
import GlobalContext from "../api/contexts/GlobalContetxts";
// intro,female,male,inter,conc
export default function Genderkid() {
  const intro=useRef(null);
  const female=useRef(null);
  const male=useRef(null);
  const inter=useRef(null);
  const conc=useRef(null);

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  return (
    <div className="">
        <div className="flex flex-col flex-wrap justify-center">
          <Navbarinfopagek intro={intro} female={female} male={male} inter={inter} conc={conc} />
          <div className="bg-[#fcfaf4] h-auto w-screen text-center">
            <h1 className="infopagetitle text-[#2a601d]">
              DISCOVERING GENDER <br />
              ANATOMY
            </h1>
            <div className="flex flex-row mt-[6.3rem]">
              <Image src={image3} className=""></Image>
              <div className="bg-[#2a601deb] w-screen h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-2" ref={intro}>
                <h1 className="mainpageheadings text-[#fcfaf4] text-[65px]">
                  Introduction
                </h1>
                <h1 className="mainpagep ga text-[#fcfaf4] text-[35px]">
                  Learning about our bodies is an exciting journey, and it's
                  okay to be curious! Embrace your uniqueness and the uniqueness
                  of others, and always be kind and respectful.
                </h1>
              </div>
            </div>
          </div>
          <div className="bloop h-auto w-screen text-center">
            <div className="flex flex-row">
              <div className="bg-[#2a601deb] w-screen h-auto t-0 right-0 text-center rounded-3xl mr-10 ml-10 mb-10 mt-10 p-2">
                <h1 className="mainpageheadings text-[#fcfaf4] text-[65px]">
                  Things We All Have
                </h1>
                <h1 className="mainpagep ga text-[#fcfaf4] text-[30px] mt-4">
                  Boys and girls may have different body parts, but we also have
                  many things in common!
                  <li>
                    Everyone has a skeletal system that gives our bodies
                    structure and helps us move.
                  </li>
                  <li>
                    We all have a digestive system that helps break down food
                    for energy.
                  </li>
                  <li>
                    Both boys and girls have a bladder, which helps us hold pee.
                  </li>
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#77a56c] w-screen h-auto text-center">
            <h1 className="mainpageheadings text-[#fcfaf4] text-[60px]" ref={female}>
              Girls
            </h1>
            <h1 className="mainpagep ga text-[#fcfaf4] text-[30px] mt-4">
              Girls have their own unique body parts.
            </h1>
            <div className="flex flex-row justify-center gap-14 mb-10">
              <div className="cardui cardgender inside bg-[#2a601d]">
                <Image src={image1} className="rounded-3xl"></Image>
              </div>
              <div className="cardui cardgender bg-[#2a601d]">
                <Image src={image2} className="rounded-3xl"></Image>
              </div>
            </div>
            <p className="text-white text-[20px] mb-10">
              Hover to flip these cards!
            </p>
          </div>
          <div className="bg-[#c2bb40d9] h-auto w-screen text-center" ref={male}>
            <h1 className="mainpageheadings text-[#fcfaf4] text-[60px]">
              Boys
            </h1>
            <h1 className="mainpagep ga text-[#fcfaf4] text-[30px] mt-4">
              Boys have different body parts compared to girls. Here are the
              main parts you'll find on the outside and inside:
            </h1>
            <div className="flex flex-row justify-center gap-14 mb-10">
              <div className="cardui cardgender boys boyin bg-[#ffda21]">
                <Image src={image4} className="rounded-3xl"></Image>
              </div>
              <div className="cardui cardgender boys boyout bg-[#ffda21]">
                <Image src={image5} className="rounded-3xl"></Image>
              </div>
            </div>
            <p className="text-white text-[20px] mb-10">
              Hover to flip these cards!
            </p>
          </div>
          <div className="bg-[#ab452ea9] h-auto w-screen text-center">
            <h1 className="mainpageheadings text-[#fcfaf4] text-[60px]" ref={inter}>
              Intersex
            </h1>
            <h1 className="mainpagep ga text-[#fcfaf4] text-[30px] mt-4">
              In intersex individuals, their bodies may have a combination of
              features that we usually associate with boys or girls. They might
              have a mix of genitals or reproductive organs that are not
              typically seen as only 'male' or 'female.'
            </h1>
            <div className="flex flex-row justify-center gap-14 mb-10">
              <div className="cardui cardgender intersex is1 bg-[#a62629]">
                <Image src={image6} className="rounded-3xl"></Image>
              </div>
              <div className="cardui cardgender intersex is2 bg-[#a62629]">
                <Image src={image7} className="rounded-3xl"></Image>
              </div>
            </div>
            <p className="text-white text-[20px] mb-10">
              Hover to flip these cards!
            </p>
          </div>
          <div className="bloop">
            <div className="bg-[#2a601deb] w-auto h-auto t-0 right-0 text-center rounded-3xl mr-10 ml-10 mb-10 mt-10 p-2" ref={conc}>
              <h1 className="mainpageheadings text-[#fcfaf4] text-[65px]">
                Celebrating Our Differences
              </h1>
              <h1 className="mainpagep ga text-[#fcfaf4] text-[30px] mt-4">
                It's important to celebrate and respect the differences between
                our bodies. Remember, everyone is unique, and that's what makes
                us special. Treat others with kindness and acceptance, no matter
                how their bodies look or what gender they identify with.
              </h1>
            </div>
          </div>
        </div>
    </div>
  )}