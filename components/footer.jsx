import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
export default function Footer() {
  // const { inforefs } = useContext(GlobalContext);
  return (
    <div className="h-[auto] bg-[#e2b608dc] gap-0 mt-auto">
      <div className=" flex flex-col justify-enter text-center gap-4 ">
        <h1 className=" ml-3 text-white mt-[2rem] leading-4 font-Raleway">
          Contact
        </h1>
        <ul className="mt-[1px] mainpagep text-white flex flex-row justify-center text-center text-4xl gap-5">
          <li>
            <MdEmail />
          </li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <FaPhoneSquareAlt />
          </li>
        </ul>
      </div>
      <h1 className="text-white font-Raleway text-[3rem] font-thin text-center mt-[-3%]">
        تشکیل{" "}
      </h1>
    </div>
  );
}
