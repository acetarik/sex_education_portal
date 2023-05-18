"use client";
import React from "react";
import Pyarisidebar from "../../components/pyarisidebar";
import Image from "next/image";
import image1 from "../../assets/gachild.png";
import image2 from "../../assets/hachild.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Preteen = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  return (
    <div className="flex flex-row w-screen">
      <Pyarisidebar />
      <div className="flex flex-col text-center w-screen justify-around">
        <h1 className="infopagetitle mb-0 text-[#2a601d]">Preteen</h1>
        <div className="flex flex-row justify-center items-center flex-grow gap-10 mt-[-5%]">
          <Link href="/genderanatomykids">
            <div className="cardui child card1">
              <Image
                src={image1}
                alt="image1"
                className="w-[100%] h-[100%] object-cover rounded-2xl"
              />
            </div>
          </Link>
            <Link href="/safety">
              <div className="cardui child card2">
                <Image
                  src={image2}
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

export default Preteen;
