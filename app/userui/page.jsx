"use client";
import React, { useEffect } from "react";
import Pyarisidebar from "../../components/pyarisidebar";
import Image from "next/image";
import image1 from "../../assets/Adult.png";
import image2 from "../../assets/Children.png";
import image3 from "../../assets/Teens.png";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import GlobalContext from "../api/contexts/GlobalContetxts";
import Link from "next/link";
const Userui = () => {
  const router = useRouter();
  const { gage, setgage, glogin, pb } = useContext(GlobalContext);
  const age = gage < 12 ? "child" : gage <= 18 ? "teen" : "adult";
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  return (
    <div className="h-screen w-screen bg-[#fff] flex flex-row">
      <Pyarisidebar />
      <div className="flex-grow h-screen flex gap-10 flex-row items-center justify-center">
        <Link href={"./preteen"}>
          <div className="cardui cardui1">
            <Image
              src={image2}
              alt="image1"
              className="w-[100%] h-[100%] object-cover rounded-2xl"
            />
          </div>
        </Link>
        <Link href={age=="child"?"#":"/teen"}>
          <div className="cardui cardui2">
            <Image
              src={image3}
              alt="image1"
              className="w-[100%] h-[100%] object-cover rounded-2xl"
            />
          </div>
        </Link>
        <Link href={(age=="child" || age=="teen")?"#":"/adult"}>
          <div className="cardui cardui3 font-Raleway">
            <Image
              src={image1}
              alt="image1"
              className="w-[100%] h-[100%] object-cover rounded-2xl"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Userui;
