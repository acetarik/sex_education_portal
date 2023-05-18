"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbarinfopage from "../../components/navbarinfopage";
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

export default function gender() {
  const iRef = useRef(null);
  const fRef = useRef(null);
  const mRef = useRef(null);
  const isRef = useRef(null);
  const cRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  const { gage, setgage } = useContext(GlobalContext);
  const age = gage < 12 ? "child" : gage <= 18 ? "teen" : "adult";
  return (
    <div>
        <div className="flex flex-col flex-wrap justify-center">
          <Navbarinfopage intro={iRef} female={fRef} male={mRef} inter={isRef} conc={cRef} />
          <div className="bg-[#fcfaf4] h-auto w-screen text-center">
            <h1 className="infopagetitle text-[#2a601d]">
              DISCOVERING GENDER <br />
              ANATOMY
            </h1>
            <div className="flex flex-row mt-[6.3rem]">
              <Image src={image3} className=""></Image>
              <div className="bg-[#2a601deb] w-screen h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-2"
              ref={iRef}>
                <h1 className="mainpageheadings text-[#fcfaf4] text-[65px]">
                  Introduction
                </h1>
                <h1 className="mainpagep ga text-[#fcfaf4] text-[35px]">
                  As teenagers, it's important to understand the basics of
                  gender anatomy. Gender anatomy refers to the physical
                  characteristics that differentiate boys and girls. Gender
                  anatomy is part of our biological makeup, and it's essential
                  to understand and respect our own bodies as well as the bodies
                  of others.
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#77a56c] w-screen h-auto text-center justify-center" ref={fRef}>
            <h1 className="mainpageheadings ga text-[#fcfaf4] text-[60px]">
              Females
            </h1>
            <div className="w-[60%] h-auto p-3 text-[#fcfaf4] bg-[#2a601deb] rounded-2xl mx-auto mt-4 mb-4">
              <h1 className="text-[30px]">External</h1>
              <p className="text-[25px] text-[#fcfaf4]">
                Females have a vulva, which includes the clitoris, labia, and
                vaginal opening. These parts play a role in peeing, sexual
                pleasure, and childbirth.
              </p>
            </div>
            <p className="text-white text-[20px] mb-2">Hover for more info!</p>
            <div className="flex flex-row justify-center gap-14 mb-10">
              <div className="cardui cardgender t ga1 bg-[#2a601deb]">
                CLITORIS
              </div>
              <div className="cardui cardgender t ga2 bg-[#2a601deb]">
                LABIA
              </div>
              <div className="cardui cardgender t ga3 bg-[#2a601deb]">
                VAGINAL OPENING
              </div>
              <div className="cardui cardgender t ga4 bg-[#2a601deb]">
                <Image src={image8} className="rounded-2xl"></Image>
              </div>
            </div>
            <div className="w-[60%] h-auto p-3 text-[#fcfaf4] bg-[#2a601deb] rounded-2xl mx-auto mt-4 mb-4">
              <h1 className="text-[30px]">Internal</h1>
              <p className="text-[25px] text-[#fcfaf4]">
                Inside a female body, there's a uterus, ovaries, fallopian
                tubes, and vagina. These organs are involved in menstruation,
                pregnancy, and childbirth.
              </p>
            </div>
            <p className="text-white text-[20px] mb-2">Hover for more info!</p>
            <div className="flex flex-row justify-center gap-14 mb-10">
              <div className="cardui cardgender t ga5 bg-[#2a601deb]">
                UTERUS
              </div>
              <div className="cardui cardgender t ga6 bg-[#2a601deb]">
                OVARIES
              </div>
              <div className="cardui cardgender t ga7 bg-[#2a601deb]">
                FALLOPIAN TUBES
              </div>
              <div className="cardui cardgender t ga8 bg-[#2a601deb]">
                VAGINA
              </div>
              <div className="cardui cardgender t ga9 bg-[#2a601deb]">
                VIEW DIAGRAM
              </div>
            </div>
          </div>
          <div className="bg-[#c2bb40d9] w-screen h-auto text-center justify-center" ref={mRef}>
            <h1 className="mainpageheadings ga text-[#fcfaf4] text-[60px]">
              Males
            </h1>
            <div className="w-[60%] h-auto p-3 text-[#fcfaf4] bg-[#2a601deb] rounded-2xl mx-auto mt-4 mb-4">
              <h1 className="text-[30px]">External</h1>
              <p className="text-[25px] text-[#fcfaf4]">
                Males have a penis and scrotum. The penis is used for peeing and
                sexual activity, while the scrotum holds the testicles.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-14 mb-10">
              <div className="cardui cardgender t m ga10 bg-[#ffda21]">
                PENIS
              </div>
              <div className="cardui cardgender t m ga11 bg-[#ffda21]">
                SCROTUM
              </div>
            </div>
            <p className="text-white text-[20px] mb-10">
              Hover to flip these cards!
            </p>
            <div className="w-[60%] h-auto p-3 text-[#fcfaf4] bg-[#2a601deb] rounded-2xl mx-auto mt-4 mb-4">
              <h1 className="text-[30px]">Internal</h1>
              <p className="text-[25px] text-[#fcfaf4]">
                Inside a male body, there are organs like the prostate gland,
                seminal vesicles, and vas deferens. These organs are responsible
                for producing and delivering sperm.
              </p>
            </div>
            <div className="flex flex-row justify-center gap-14 mb-10">
              <div className="cardui cardgender t m ga12 bg-[#ffda21]">
                PROSTATE GLAND
              </div>
              <div className="cardui cardgender t m ga13 bg-[#ffda21]">
                SEMINAL VESICLES
              </div>
              <div className="cardui cardgender t m ga14 bg-[#ffda21]">
                VAS DEFERENS
              </div>
              <div className="cardui cardgender t m ga15 bg-[#ffda21]">
                VIEW DIAGRAM
              </div>
            </div>
          </div>
          <div className="bg-[#ab452ea9] h-auto w-screen text-center" ref={isRef}>
            <h1 className="mainpageheadings ga text-[#fcfaf4] text-[60px]">
              Intersex
            </h1>
            <div className="w-[80%] h-auto p-3 text-[#fcfaf4] bg-[#a62629] rounded-2xl mx-auto mt-4 mb-4">
              <p className="text-[#fcfaf4] text-[25px]">
                Intersex is a term used to describe individuals who are born
                with atypical reproductive or sexual anatomy that does not align
                with conventional male or female classifications. It is an
                inherent and natural variation of human biology and does not
                indicate any abnormality or deficiency. Intersex individuals may
                possess a combination of both male and female biological
                characteristics, resulting in a diverse range of experiences and
                identities.
              </p>
            </div>
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
            <div className="bg-[#2a601deb] w-auto h-auto t-0 right-0 text-center rounded-3xl mr-10 ml-10 mb-10 mt-10 p-2" ref={cRef}>
              <h1 className="mainpageheadings ga text-[#fcfaf4] text-[65px]">
                Celebrating Our Differences
              </h1>
              <h1 className="mainpagep text-[#fcfaf4] text-[30px] mt-4">
                It's important to celebrate and respect the differences between
                our bodies. Remember, everyone is unique, and that's what makes
                us special. Treat others with kindness and acceptance, no matter
                how their bodies look or what gender they identify with.
              </h1>
            </div>
          </div>
        </div>
    </div>
  );
}
