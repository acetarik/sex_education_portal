"use client";
import React, { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
// import Navbar from "../../components/navbar";
import Nav2 from "../../components/nav2";
import About from "../../components/about";
import Mainpagebg from "../../components/mainpagebg";
import Info from "../../components/info";
import GlobalContext from "../api/contexts/GlobalContetxts";
import Link from "next/link";
export default function Minpage() {
  const scroller = window.scrollY;

  return (
    <div className="flex flex-col flex-wrap justify-center min-h-screen min-w-fit">
      <Mainpagebg className="mt-0" />
      <About />
      <Info className="z-0" />
      {/*<button className="button bg-red-500">
        <Link href="/userui">click</Link>
  </button>*/}
    </div>
  );
}
