"use client";
import React from "react";
import { useRef, useContext, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
import AOS from "aos";

import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  const aboutRef = useRef(null);
  const globalContext = useContext(GlobalContext);
  const { sectionrefs, missrefs } = globalContext;
  // const { ref, inView } = useInView({ threshold: 0.2 });
  // const variants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  // };
  return (
    <div
    // ref={ref}
    >
      <div
        data-aos="fade-up"
        className="h-auto mx-auto w-screen  bg-[#e2b514c6] text-center flex justify-center flex-col p-3 text-white"
        ref={sectionrefs}
      >
        <div data-aos="fade-up">
          <h2 className="mainpageheadings">About Us</h2>
        </div>
        <div
          data-aos="fade-up"
          // ref={ref}
          className="m-auto"
        >
          <h1 className="mainpagep text-[27px]" data-aos="fade-up">
            <b className="text-[60px]">"</b>Welcome to Tashkeel, an inclusive
            and informative online platform dedicated to addressing the pressing
            need for accurate and comprehensive sex education in Pakistan. We
            recognize the challenges faced by our society due to the lack of
            access to vital information about sexual and reproductive health,
            and we are committed to filling this void.
            <b className="text-[60px]">"</b>
          </h1>
        </div>
      </div>
      <div
        ref={missrefs}
        data-aos="fade-up"
        className="h-auto mx-auto w-screen bg-[#258730ca]
        text-center flex justify-center flex-col p-3 text-white"
      >
        <h2 className="mainpageheadings" data-aos="fade-up">
          Our Mission
        </h2>
        <div
          // ref={ref}
          data-aos="fade-up"
          className="m-auto"
        >
          <h1 data-aos="fade-up" className="mainpagep text-[27px]">
            <b className="text-[60px]">"</b>Our mission is to empower young
            people and promote healthy behaviors through accessible and
            appropriate sex education resources. We understand that children and
            adolescents require age-appropriate information to make informed
            decisions about their sexual health, and we aim to provide them with
            the knowledge and tools they need to navigate this important aspect
            of their lives.
            <b className="text-[60px]">"</b>
          </h1>
        </div>
      </div>
    </div>
  );
}
