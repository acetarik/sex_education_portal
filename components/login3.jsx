"use client";

//*THIS IS THE LOGIN MODAL FOR THE WEBSITE
import React, { useEffect } from "react";
import PocketBase from "pocketbase";
import { useState, useContext } from "react";
import Image from "next/image";
import image1 from "../assets/last1.png";
import Link from "next/link";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
import { setgid } from "process";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// import bcrypt from "bcryptjs";

//{<Link href="/register" className="h-[100%] bg-black" />}
//{<Image src={image1} alt="image1" className="w-[15rem] h-[15rem]" />}
const Login3 = (props) => {
  const router = useRouter();
  // Create a new Date object
  const today = new Date();

  // Extract the date components
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // January is 0, so we add 1
  const day = today.getDate();

  // Format the date as desired (e.g., YYYY-MM-DD)
  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  console.log(formattedDate);
  const {
    gicon,
    setgicon,
    glogin,
    setgLogin,
    guser,
    setgUser,
    ghandlelogin,
    gsetuserid,
    guserid,
    gage,
    grole,
    setgrole,
    pb,
    setgage,
  } = useContext(GlobalContext);
  const [l_email, setL_email] = useState("");
  const [l_password, setL_password] = useState("");
  const loginUser = async (email, password) => {
    // const pb = new PocketBase("http://127.0.0.1:8090");
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      const { username, id, dob, avatar, role } = await pb
        .collection("users")
        .getFirstListItem(`email='${email}'`);
      // dob = new Date(dob);

      // Example birthday (replace with the person's actual birthdate)
      const birthday = new Date(dob);
      setgrole(role);
      setgicon(avatar);

      // Calculate the age
      let age = today.getFullYear() - birthday.getFullYear();

      // Check if the birthday hasn't occurred yet this year
      const hasBirthdayPassed =
        today.getMonth() > birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() &&
          today.getDate() >= birthday.getDate());

      if (!hasBirthdayPassed) {
        age--; // Subtract 1 from age
      }
      try {
        setgage(age);
      } catch (err) {
        console.log(err);
      }

      console.log({ age: age });

      console.log({ record: username, id: id });
      router.push("/userui");
      // localStorage.setItem("username", username);
      // localStorage.setItem("LOGGEDIN", true);
      // console.log({
      //   username: localStorage.getItem("username"),
      //   LOGGED: localStorage.getItem("LOGGEDIN"),
      // });
      setgLogin(true);
      setgUser(username);
      gsetuserid(id);
      console.log(glogin);
      alert("Login success");
    } catch (error) {
      // handle login error
      // localStorage.setItem("LOGGEDIN", false);
      alert("Login failed");
    }
  };
  return (
    <div
      className={`${props.isOpen ? "fixed" : "hidden"} top-0 left-0 
      w-[90%]`}
      // -translate-x-1/2 -translate-y-1/2
    >
      <div
        className={`${
          props.isOpen ? "bg-white blur opacity-[0.7]" : "transparent"
        }  w-screen top-0 h-screen`}
      />
      <div className="bg-tranparent h-screen w-[50%] m-auto flex flex-row justify-center z-[5000] rounded-2xl opacity-100 -translate-x-[-10%] -translate-y-[100%] ">
        <div className="w-[50%] h-[50%] m-auto bg-[#b3dba1] rounded-l-3xl flex flex-col">
          <button
            className="bg-[#243228] h-10 w-10 mt-2 ml-2 text-white hover:bg-[#3bab5a]"
            onClick={props.setisOpen}
          >
            X
          </button>
          <Image
            src={image1}
            alt="image1"
            className="w-[15rem] h-[15rem] ml-[25%] mt-[15%]"
          />
        </div>
        <div className="w-[50%] h-[50%] m-auto bg-[#b3dba1] rounded-r-3xl flex flex-col justify-around items-center">
          <h1 className="text-[2rem] mt-5 z-[15] text-[#243228]">
            Member Login
          </h1>
          <ul className="flex flex-col gap-7 mt-[-50px]">
            <li>
              <input
                placeholder="Email"
                type="text"
                value={l_email}
                onChange={(e) => setL_email(e.target.value)}
                className="h-[2rem] rounded-xl bg-slate-200 pl-2"
              />
            </li>
            <li>
              <input
                placeholder="Password"
                type="password"
                value={l_password}
                onChange={(e) => setL_password(e.target.value)}
                className="h-[2rem] rounded-xl bg-slate-200 pl-2"
              />
            </li>
          </ul>
          <div className="flex flex-col  gap-3 justify-around items-center">
            <button
              className="button rounded-2xl w-[14rem] hover:bg-[#e2b808] bg-[#3bab5a]"
              onClick={() => {
                loginUser(l_email, l_password);
                props.handler;
              }}
            >
              <h1 className="text-white">Login</h1>
            </button>
            <button className="button rounded-2xl w-[14rem] hover:bg-[#e2b808] bg-[#3bab5a]">
              <Link href="/register">
                <h1 className="text-white">Create Account</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Login3;
