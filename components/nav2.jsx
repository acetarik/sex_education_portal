"use client";

import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import Login3 from "./login3";
import Link from "next/link";
import Loginblock from "./loginblock";
import GlobalContext from "../app/api/contexts/GlobalContetxts";

const Nav2 = () => {
  const ref = useRef(null);
  const {
    pb,
    glogin,
    setgLogin,
    guser,
    setgUser,
    ghandlelogin,
    sectionrefs,
    statrefs,
    inforefs,
    missrefs,
  } = useContext(GlobalContext);
  const [isLogin, setisLogin] = useState(false);
  const handleLogin = () => {
    setisLogin(true);
  };
  const handleClose = () => {
    setisLogin(false);
  };
  const ayo = () => {
    useEffect(() => {
      const isLoggedIn = localStorage.getItem("LOGGEDIN");
    }, []);
  };

  //localstorage
  const [hello, sethello] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("LOGGEDIN");
    sethello(isLoggedIn);
    return () => {
      localStorage.setItem("LOGGEDIN", false);
    };
  }, []);
  console.log({ hellos: hello });
  useEffect(() => {
    const handleScroll = () => {
      const colorChangeElement = ref.current;
      const scrollPosition = window.scrollY;

      // Define your logic to change the color based on the scroll position
      if (scrollPosition > 100) {
        colorChangeElement.classList.remove("screw");

        colorChangeElement.classList.add("scrolling");
      } else {
        colorChangeElement.classList.remove("scrolling");
        colorChangeElement.classList.add("screw");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isLogin) {
      document.body.classList.add("modal-open");
    } else {
      // Enable scrolling when the modal is hidden
      document.body.classList.remove("modal-open");
    }
  }, [isLogin]);
  return (
    <>
      {isLogin && (
        <Login3
          isOpen={isLogin}
          handler={ayo}
          setisOpen={handleClose}
          className="overlay z-[100] absolute top-0"
        />
      )}
      <nav
        ref={ref}
        className="flex trans flex-row justify-between w-screen overflow-x-hidden h-20 text-lg font-bold sticky top-0 z-[10] screw"
      >
        <div className="my-auto w-auto ml-[3rem] flex flex-row justify-center text-center text-xl">
          {" "}
          تشکیل|
        </div>
        <ul className="flex flex-row justify-center w-screen my-auto">
          <li
            className="hover:bg-[#258730] p-6"
            onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: sectionrefs.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >
            ABOUT
          </li>

          <li
            className="hover:bg-[#258730] p-6"
            onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: missrefs.current.offsetTop - 80,
                behavior: "smooth",
              })
            }
          >
            MISSION
          </li>
          <li
            className="hover:bg-[#258730] p-6"
            onClick={() =>
              // sectionrefs.current.scrollIntoView({ behavior: "smooth" })
              window.scrollTo({
                top: statrefs.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            STATISTICS
          </li>
          <li
            className="hover:bg-[#258730] p-6"
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            CONTACT
          </li>
          <li className="hover:bg-[#258730] p-6">
            <Link href={glogin ? `${"/appointment"}` : "/mainpage"}>
              <button
                onClick={() => {
                  !glogin ? setisLogin(true) : "";
                }}
              >
                BOOKING
              </button>
            </Link>
          </li>
        </ul>
        {glogin ? (
          <div className="flex flex-row place-content-center place-items-center">
            <Link href="./userui">
              <h1 className="my-auto bg-[#258730] text-[22px] w-[10rem] h-[3rem] text-white hover:bg-yellow-300 p-3 text-center mr-[3rem] rounded-xl">
                {guser}
              </h1>
              {/*user ka naam aa jata hai idher agr login successful hai isLogin wala context */}
            </Link>
            <button
              className="button my-auto  rounded-xl w-[10rem] h-[3rem] bg-[#258730] text-white mr-[3rem]"
              onClick={() => {
                setgLogin(false);
                pb.authStore.clear();
              }}
            >
              LOGOUT{" "}
            </button>
          </div>
        ) : (
          <button
            className="button my-auto bg-[#258730] rounded-xl w-[10rem] h-[3rem] hover:bg-yellow-300 mr-[3rem]"
            onClick={handleLogin}
          >
            LOGIN
          </button>
        )}
      </nav>
    </>
  );
};

export default Nav2;
