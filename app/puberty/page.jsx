"use client";
import React, { useContext, useEffect, useRef } from "react";
import Navbarpuberty from "../../components/navbarpuberty";
import Image from "next/image";
import image0 from "../../assets/puberty.png";
import image1 from "../../assets/puberty2.png";
import GlobalContext from "../api/contexts/GlobalContetxts";
import { useRouter } from "next/navigation";
import Link from "next/link";
// intro, female, male, pubwel
export default function gender() {
  const introRef=useRef(null);
  const femaleRef=useRef(null);
  const maleRef=useRef(null);
  const pubwelRef=useRef(null);

  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  const { gage, setgage } = useContext(GlobalContext);
  const age = gage < 12 ? "child" : gage <= 18 ? "teen" : "adult";
  return (
    <div>
      {/* {age=="teen" && ( */}
      <div className="flex flex-col flex-wrap justify-center">
        <Navbarpuberty intro={introRef} female={femaleRef} male={maleRef} pubwel={pubwelRef} />
        <div className="bg-[#fcfaf4] h-auto w-screen text-center sley">
          <h1 className="infopagetitle text-[#eae9ec]">PUBERTY</h1>
          <div className="flex flex-row mt-[6.3rem] mb-10">
            <Image src={image0} className="scale-[0.9] mt-14"></Image>
            <div className="bg-[#fad12cce] w-screen h-auto t-0 right-0 text-center rounded-3xl mb-10"
            ref={introRef}>
              <h1 className="mainpageheadings text-[#fcfaf4] text-[60px]">
                Introduction
              </h1>
              <h1 className="mainpagep ga text-[#fcfaf4] text-[30px]">
                Puberty is a natural and transformative stage of life that every
                person goes through. It marks the beginning of physical and
                hormonal changes that lead to sexual maturity. Understanding
                puberty is essential as it prepares us for the changes our
                bodies will undergo during this period.
              </h1>
            </div>
            <Image src={image1} className="scale-[0.9] mt-14"></Image>
          </div>
        </div>
        <div className="bg-[#e9eaec] w-screen h-auto text-center justify-center" ref={femaleRef}>
          <h1 className="mainpageheadings ga text-[#333652] text-[60px]">
            FEMALE PUBERTY
          </h1>
          <div className="w-[60%] h-auto p-4 text-[#333652] bg-[#fad12ce8] rounded-2xl mx-auto mt-4 mb-4">
            <p className="text-[26px] text-[#fffef9] font-medium">
              Puberty in females brings about significant changes that prepare
              the body for reproductive capabilities. These changes typically
              occur between the ages of 8 and 14, but they can vary from person
              to person. Below are the main aspects of female puberty:
            </p>
          </div>
          <p className="text-[#333652] text-[20px] mb-2">
            Hover for more info!
          </p>
          <div className="flex flex-row justify-center gap-14 mb-10">
            <div className="cardui cardgender cardpuberty p1 bg-[#333652]">
              Breast Development
            </div>
            <div className="cardui cardgender cardpuberty p2 bg-[#333652]">
              Menstruation
            </div>
            <div className="cardui cardgender cardpuberty p3 bg-[#333652]">
              Body Hair
            </div>
            <div className="cardui cardgender cardpuberty p4 bg-[#333652]">
              Internal Changes
            </div>
          </div>
        </div>
        <div className="bg-[#595c72] w-screen h-auto text-center justify-center" ref={maleRef}>
          <h1 className="mainpageheadings ga text-[#fffef9] text-[60px]">
            Males
          </h1>
          <div className="w-[60%] h-auto p-3 text-[#fffef9] bg-[#90adc6] rounded-2xl mx-auto mt-4 mb-4">
            <p className="text-[26px] text-[#fffef9]">
              Puberty in males brings about distinctive changes that prepare the
              body for sexual maturity and reproductive functions. These changes
              generally occur between the ages of 10 and 17, but individual
              variations exist. Below are the main aspects of male puberty
            </p>
          </div>
          <p className="text-[#fffef9] text-[20px] mb-2">
            Hover for more info!
          </p>
          <div className="flex flex-row justify-center gap-14 mb-10">
            <div className="cardui cardgender cardpuberty m p5 bg-[#fad12ce8]">
              Growth of the Penis and Testicles
            </div>
            <div className="cardui cardgender cardpuberty m p6 bg-[#fad12ce8]">
              Body Hair
            </div>
            <div className="cardui cardgender cardpuberty m p7 bg-[#fad12ce8]">
              Voice Changes
            </div>
            <div className="cardui cardgender cardpuberty m p8 bg-[#fad12ce8]">
              Facial and Body Hair
            </div>
            <div className="cardui cardgender cardpuberty m p9 bg-[#fad12ce8]">
              Growth Spurt
            </div>
          </div>
        </div>

        <div className="bg-[#e9eaec] w-screen h-auto text-center justify-center yum" ref={pubwelRef}>
          <h1 className="mainpageheadings ga text-[#fad12c] text-[60px]">
            PUBERTY WELLNESS
          </h1>
          <div className="w-[60%] h-auto p-4 text-[#333652] bg-[#fad12ce8] rounded-2xl mx-auto mt-4 mb-4">
            <h1 className="heading text-[#fcfaf4] text-[34px]">
              Personal Hygiene
            </h1>
            <p className="text-[26px] text-[#fffef9] font-medium">
              During puberty, taking care of personal hygiene is crucial.
              Regularly showering or bathing helps keep the body clean and
              fresh. Using mild soaps and shampoos designed for sensitive skin
              can prevent irritation. Don't forget to wash and mosturize daily
              to maintain a healthy appearance and prevent acne. Using
              appropriate hygiene products, such as menstrual pads or tampons,
              is also essential for both comfort and hygiene.
            </p>
          </div>
          <div className="w-[60%] h-auto p-4 text-[#333652] bg-[#fad12ce8] rounded-2xl mx-auto mt-4 mb-4">
            <h1 className="heading text-[#fcfaf4] text-[34px]">
              Emotional Well-being
            </h1>
            <p className="text-[26px] text-[#fffef9] font-medium">
              Puberty can bring a rollercoaster of emotions! It's important to
              take care of your emotional well-being. Find healthy ways to
              manage stress, such as engaging in hobbies, practicing deep
              breathing or meditation, and spending time with supportive friends
              and family. Building self-esteem is key – focus on your strengths
              and achievements. Remember, it's okay to seek help if you're
              feeling overwhelmed or experiencing persistent emotional
              difficulties.
            </p>
          </div>
          <div className="w-[60%] h-auto p-4 text-[#333652] bg-[#fad12ce8] rounded-2xl mx-auto mt-4 mb-4">
            <h1 className="heading text-[#fcfaf4] text-[34px]">
              Body Positivity and Self-acceptance
            </h1>
            <p className="text-[26px] text-[#fffef9] font-medium">
              Embrace your body during puberty and remember that everyone
              develops at their own pace, and differences are normal and
              beautiful. Practice positive self-talk and surround yourself with
              supportive and inclusive individuals. Celebrate diversity and
              respect others' bodies and identities. Most importantly, love
              yourself!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
