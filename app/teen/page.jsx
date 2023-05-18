"use client";
import React from "react";
import { useEffect } from "react";
import Pyarisidebar from "../../components/pyarisidebar";
import Image from "next/image";
import image1 from "../../assets/pubertyteen.png";
import image2 from "../../assets/genderteen.png";
import image3 from "../../assets/harrassmentteen.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Teen = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  return (
    <div className="flex flex-row w-screen">
      <Pyarisidebar />
      <div className="flex flex-col text-center w-screen justify-around">
        <h1 className="infopagetitle mb-0 text-[#d6630f]">Teens</h1>
        <div className="flex flex-row justify-center items-center flex-grow gap-10 mt-[-5%]">
          <Link href="/puberty">
          <div className="cardui teen card1">
            <Image
              src={image1}
              alt="image1"
              className="w-[100%] h-[100%] object-cover rounded-2xl"
              />
          </div>
          </Link>
          <Link href="/genderanatomy">
          <div className="cardui teen card2">
            <Image
              src={image2}
              alt="image1"
              className="w-[100%] h-[100%] object-cover rounded-2xl"
              />
          </div>
          </Link>
          <Link href="/harassment">
          <div className="cardui teen card3 font-Raleway">
            <Image
              src={image3}
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

export default Teen;
