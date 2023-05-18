import React from "react";
import { ImHome } from "react-icons/im";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Sideicon from "./sideicon";
import { TbMoodKid } from "react-icons/tb";
import { FaUserNinja } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { IoExit } from "react-icons/io5";
import { useContext } from "react";
import { Tooltip } from "@nextui-org/react";
import { BsCalendarWeekFill } from "react-icons/bs";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
import Link from "next/link";
import Image from "next/image";
import image1 from "../assets/avatars/1.png";
import image2 from "../assets/avatars/2.png";
import image3 from "../assets/avatars/3.png";
import image4 from "../assets/avatars/4.png";
import image5 from "../assets/avatars/5.png";
import image6 from "../assets/avatars/6.png";
import image7 from "../assets/avatars/7.png";
import image8 from "../assets/avatars/8.png";
import image9 from "../assets/avatars/9.png";
import image10 from "../assets/avatars/10.png";
import image11 from "../assets/avatars/11.png";
import image12 from "../assets/avatars/12.png";
import image13 from "../assets/avatars/13.png";
import image14 from "../assets/avatars/14.png";
import image15 from "../assets/avatars/15.png";
import image16 from "../assets/avatars/16.png";
//!TODO: add the state to the icons and baki bakwas dekhni if it integrates after i add it after login ya na
const Pyarisidebar = () => {
  const avatArray = [
    image16,
    image16,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];
  const {
    gage,
    glogin,
    setgLogin,
    guser,
    setgUser,
    setgage,
    guserid,
    gsetuserid,
    gicon,
    grole,
    setgrole,
  } = useContext(GlobalContext);
  const age = gage < 12 ? "child" : gage <= 18 ? "teen" : "adult";
  return (
    <div className="h-screen rounded-sm gap-3 w-[6rem] bg-[#e2b808] flex flex-col text-center top-0 left-0 items-center">
      <div className="h-20 w-20 bg-[#258730] rounded-full mt-2">
        <Image src={avatArray[gicon]} h />
      </div>
      <div className="bg-[#258730] h-2 w-20"></div>
      <Tooltip content={"Home"} contentColor="invert" color={"warning"}>
        <div className="mt-2">
          <Link href="/userui">
            <Sideicon icon={<ImHome />} title="Home" />
          </Link>
        </div>
      </Tooltip>
      <Tooltip content={"Child"} contentColor="invert" color={"warning"}>
        <div>
          <Sideicon
            icon={<TbMoodKid />}
            state={age == "child" ? true : false}
          />
        </div>
      </Tooltip>
      <Tooltip content={"Teen"} contentColor="invert" color={"warning"}>
        <div>
          <Sideicon
            icon={<FaUserNinja />}
            state={age == "teen" ? true : false}
          />
        </div>
      </Tooltip>
      <Tooltip content={"Adult"} contentColor="invert" color={"warning"}>
        <div>
          <Sideicon
            icon={<RiUser2Fill />}
            state={age == "adult" ? true : false}
          />
        </div>
      </Tooltip>
      <div className="bg-[#007f00] h-2 w-20"></div>

      {grole == "user" && (
        <div>
          <Tooltip
            content={"Appointment"}
            contentColor="invert"
            color={"warning"}
          >
            <div>
              <Link href="/appointment">
                <Sideicon icon={<BsFillCalendarCheckFill />} />
              </Link>
            </div>
          </Tooltip>
          <Tooltip content={"Check"} contentColor="invert" color={"warning"}>
            <div className="mt-2">
              <Link href="/userui/userdashboard">
                <Sideicon icon={<BsCalendarWeekFill />} title="Home" />
              </Link>
            </div>
          </Tooltip>
        </div>
      )}
      {grole == "consultant" && (
        <Tooltip
          content={"Consultants"}
          contentColor="invert"
          color={"warning"}
        >
          <div>
            <Link href="/consultants">
              <Sideicon icon={<BsFillCalendarCheckFill />} />
            </Link>
          </div>
        </Tooltip>
      )}
      <Tooltip content={"Logout"} contentColor="invert" color={"warning"}>
        <div
          className=" mb-3"
          onClick={() => {
            setgLogin(false);
            setgUser(null);
            setgage(null);
            gsetuserid(null);
          }}
        >
          <Link href="/mainpage">
            <Sideicon icon={<IoExit />} />
          </Link>
        </div>
      </Tooltip>
    </div>
  );
};

export default Pyarisidebar;
// const [glogin, setgLogin] = useState(false);
// const [guser, setgUser] = useState(null);
// const [gage, setgage] = useState(0);
// const [guserid, gsetuserid] = useState(null);
