"use client";
import React from "react";
import Link from "next/link";
import { useRef } from "react";
import Navhara from "../../components/navhara";
import Image from "next/image";
import image1 from "../../assets/verbal.png";
import image2 from "../../assets/phys.png";
import image3 from "../../assets/vis.png";
import image15 from "../../assets/parent.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// intro,type,pre,leg,sup
export default function Har_adult() {
  const intro = useRef(null);
  const type = useRef(null);
  const pre = useRef(null);
  const leg = useRef(null);
  const sup = useRef(null);

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  return (
    <>
      <div className="flex flex-col h-auto w-auto flex-wrap justify-center">
        <Navhara intro={intro} type={type} pre={pre} leg={leg} sup={sup}/>
        <div className="bg-[#290808] h-auto w-screen text-center p-20 pb-5">
          <h1 className="infopagetitle text-[#f3c2d0]">SEXUAL HARASSMENT</h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#665454eb] w-auto left-12 h-auto right-0 text-center rounded-3xl mr-[7rem] mb-10 p-20 relative" ref={intro}>
              <h1 className="mainpageheadings text-[#ecccd5] text-[65px]">
                What is it?
              </h1>
              <h1 className="mainpagep ga text-[#ecccd5] text-[35px]">
                Sexual harassment refers to unwelcome or offensive behavior of a
                sexual nature that occurs in various settings, such as the
                workplace, educational institutions, or public spaces. It
                involves any form of unwanted sexual advances, requests for
                sexual favors, or other verbal, non-verbal, or physical conduct
                that creates a hostile, intimidating, or offensive environment.
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#e6abab] h-[380vh] w-screen text-center" ref={type}>
          <h1 className="infopagetitle text-[#381414]">Types of Harassment</h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#290808] w-[90%] text-justify h-[350vh] ml-[7rem] p-20 rounded-3xl mr-[7rem] ">
              <div className="flex flex-col p-20 mt-[3rem]">
                <div className="bg-[#e6abab] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#1f1646] ml-12 mb-10 text-center text-[65px]">
                    Verbal
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-20 text-[#1f1646] mt-[20%] text-justify text-[35px]">
                    <Image src={image1} className="rounded-3xl mr-10"></Image>
                    When someone uses sexually explicit language or makes
                    inappropriate sexual comments towards you. It can include
                    things like sexual jokes, comments about your appearance, or
                    persistent requests for sexual favors.
                  </h1>
                </div>

                <div className="bg-[#e6abab] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#1f1646] ml-12 mb-10 text-center text-[65px]">
                    Physical
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-20 text-[#1f1646] mt-[20%] text-justify text-[35px]">
                    <Image src={image2} className="rounded-3xl mr-10"></Image>
                    When someone touches you in a sexual way without your
                    consent. It can include things like groping, unwanted
                    kissing, or even sexual assault.
                  </h1>
                </div>

                <div className="bg-[#e6abab] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
                  <h1 className="mainpageheadings text-[#1f1646] ml-12 mb-10 text-center text-[65px]">
                    Visual
                  </h1>
                  <h1 className="mainpagep ga flex flex-row p-20 text-[#1f1646] mt-[20%] text-justify text-[35px]">
                    <Image
                      src={image3}
                      className="rounded-3xl  w-[45vh] h-[45vh] mr-10"
                    ></Image>
                    When someone shares with you or shows you sexual images,
                    videos, or messages without your consent. It can include
                    things like sending you explicit photos or videos, or
                    watching you in a private moment without your knowledge. It
                    can also include things like being exposed to pornography
                    without your consent.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#47153b] h-[130vh] w-screen p-20 text-center" ref={pre}>
          <h1 className="infopagetitle text-[#e6abab]">Prevention Tips</h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#e6abab] w-auto left-12 h-auto t-0 right-0 p-10 text-center rounded-3xl mr-[7rem] mb-10 relative">
              <h1 className="mainpagep ga p-20 text-[#290808] mt-[20%] text-justify text-[35px]">
                It's important to know your rights when it comes to sexual
                harassment.
                <br></br>
                <br></br>
                If you experience sexual harassment, you have the right to{" "}
                <b>report it and seek support.</b>
                <br></br>
                <br></br> Make sure to familiarize yourself with your workplace
                policies and procedures for reporting harassment. Remember,
                setting clear boundaries is key to preventing sexual harassment,
                and if someone crosses those boundaries, it's important to speak
                up and report it to the appropriate authorities.
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#e6abab] h-[160vh] w-screen p-20 text-center" ref={leg}>
          <h1 className="infopagetitle text-[#290808]">Legal Support</h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#290808] w-auto left-12 h-auto t-0 right-0 text-center rounded-3xl mr-[7rem] mb-10 p-10 relative">
              <h1 className="mainpagep ga p-20 text-[#e6abab] mt-[20%] text-justify text-[35px]">
                In Pakistan, sexual harassment is illegal under the<br></br>
                <br></br>
                <li className="text-[30px]">
                  Protection Against Harassment of Women at Workplace Act, 2010
                </li>
                <li className="text-[30px]">
                  Criminal Law (Amendment) Act, 2016.
                </li>
                <br></br>
                The Protection Against Harassment of Women at Workplace Act,
                2010 applies to all women and men working in Pakistan, including
                in the public and private sectors, and aims to provide
                protection against sexual harassment at the workplace.
                <br></br>
                <br></br>
                The Criminal Law (Amendment) Act, 2016 introduced harsher
                punishments for sexual harassment, including imprisonment of up
                to three years and a fine.
                <br></br>
                <br></br>Apart from this you can also file a complaint with the{" "}
                <u>
                  Federal Ombudsman for Protection Against Harassment of Women
                  at the Workplace{" "}
                </u>{" "}
                or with the police. Legal assistance can be acquired to pursue a
                case in court.
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#47153b] h-[230vh] p-20 w-screen text-center" ref={sup}>
          <h1 className="infopagetitle text-[#e6abab]">Support Resources</h1>
          <div className="flex flex-row mt-[3rem]">
            <div className="bg-[#e6abab]  w-[90%] text-justify h-[190vh] ml-auto p-20 rounded-3xl mr-[7rem] ">
              <h1 className="font-bold text-[#47153b] ml-12 mb-10 text-center text-[30px]">
                It's important to note that there may be additional local
                resources available depending on the location in Pakistan.
                Victims of sexual harassment can also seek assistance from the
                police or file a complaint with the Federal Ombudsman for
                Protection Against Harassment of Women at the Workplace.
              </h1>
              <h1 className="mainpagep ga p-20 text-[#47153b] mt-[20%] text-justify text-[35px]">
                <li>
                  <Link href="https://www.ncsw.gov.pk/Detail/Zjk0OGQ2NTgtZGVlZi00NmFiLWFiNzgtNDg5YThkOTQ0OWU0">
                    <b>
                      <u>National Commission on the Status of Women (NCSW):</u>
                    </b>
                  </Link>{" "}
                  The NCSW is a governmental organization that provides legal
                  and policy advice on issues related to gender equality and
                  women's rights. They also have a helpline for women who are
                  facing harassment at the workplace.
                </li>
                <br></br>{" "}
                <li>
                  <Link href="http://war.org.pk/">
                    <b>
                      <u>War Against Rape (WAR):</u>
                    </b>
                  </Link>{" "}
                  WAR is a non-governmental organization that provides free
                  legal, medical, and counseling services to survivors of sexual
                  violence. They can be reached at +92-2135373008​
                </li>
                <br></br>
                <li>
                  <Link href="https://rozan.org/contact-us/">
                    <b>
                      <u>Rozan:</u>
                    </b>
                  </Link>{" "}
                  Rozan is a non-governmental organization that works on issues
                  related to mental health, gender-based violence, and child
                  protection. They provide counseling and support services to
                  survivors of sexual harassment and abuse. They can be reached
                  at 051-2721900-2
                </li>
                <br></br>
                <li>
                  <Link href="https://kashf.org/">
                    <b>
                      <u>Kashf Foundation:</u>
                    </b>
                  </Link>{" "}
                  Kashf Foundation is a microfinance organization that provides
                  financial services to women in Pakistan. They also have a
                  program called "Mehfooz Helpline" that provides legal and
                  psychological support to survivors of harassment and violence.
                </li>
                <br></br>{" "}
                <li>
                  <Link href="https://www.girlsnotbrides.org/our-partnership/member-directory/acid-survivors-foundation-asf-pakistan/">
                    <b>
                      <u>Acid Survivors Foundation (ASF):</u>
                    </b>
                  </Link>{" "}
                  ASF is a non-governmental organization that provides
                  rehabilitation, medical, and counseling services to survivors
                  of acid attacks and other forms of violence.
                </li>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
