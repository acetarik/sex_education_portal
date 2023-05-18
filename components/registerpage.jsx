"use client";
// var CryptoJS = require("crypto-js");
import React, { useState, useEffect, useContext } from "react";
import { TbUserCircle } from "react-icons/tb";
import Image from "next/image";
import PocketBase from "pocketbase";
import Link from "next/link";
import AvatarSelection from "./avatar";
// const bcryptjs = require("bcryptjs");
import GlobalContext from "../app/api/contexts/GlobalContetxts";
export default function RegisterPage() {
  const { gavatar, pb } = useContext(GlobalContext);
  const av = gavatar;

  const createUser = async (
    name,
    password,
    email,
    gender,
    dob,
    av,
    nuser,
    pb
  ) => {
    const data = {
      username: name,
      email: email,
      emailVisibility: true,
      gender: gender,
      password: password,
      passwordConfirm: password,
      name: name,
      dob: new Date(dob),
      avatar: av,
      role: nuser,
    };
    try {
      const record = await pb.collection("users").create(data);
      alert("User created successfully");
    } catch {
      alert("Error occured while creating user");
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [gender, setGender] = useState("");
  const [nuser, consultant] = useState("user");
  const [dob, setdob] = useState("");
  const [isRegistered, setisRegistered] = useState(false);
  const handlecpass = (e) => {
    setCPassword(e.target.value);

    if (cpassword.length >= password.length && cpassword != password)
      alert("Password did not match");
  };
  return (
    <div className="bg-[#fcfaf4] h-screen w-screen items-center text-center gap-y-0">
      
      <h1 className="infopagetitle text-[#2c7436]">REGISTRATION</h1>
      <div className="h-auto w-[40%] rounded-3xl bg-[#2c7436e8] mx-auto flex flex-col justify-center gap-10 mt-[-2%] mb-[7%]">
      <Link href={"./mainpage"}>
          <button className="button h-10 mt-1 ml-1 top-5 w-[100%] rounded-full text-white">
            <div className="w-10 h-10 flex flex-col justify-center hover:bg-[#e2b808] bg-black text-white rounded-full text-center">X</div>
          </button>
        </Link>
        <AvatarSelection />
        <div className="text-center mt-[-5%] mb-[-5%]">Select an Avatar:</div>
        <div className="mx-auto flex flex-col gap-5 items-center mb-10 mt-5">
          <div className="flex items-center gap-6">
            <div className="wrapper">
              <input
                type="radio"
                name="selecter"
                id="option-11"
                checked={nuser === "user"}
                value="user"
                onChange={() => consultant("user")}
              />
              <input
                type="radio"
                name="selecter"
                id="option-22"
                value="consultant"
                checked={nuser === "consultant"}
                onChange={() => {
                  consultant("consultant");
                }}
                // onSelect={() => setGender("male")}
              />
              <label htmlFor="option-11" className="option option-1">
                <div className="dot"></div>
                <span>User</span>
              </label>
              <label htmlFor="option-22" className="option option-2">
                <div className="dot"></div>
                <span>Consultant</span>
              </label>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              className="h-10 w-60 rounded-3xl p-6"
              onChange={(e) => setfName(e.target.value)}
            />

            <input
              className="h-10 rounded-3xl p-6 w-60"
              type="text"
              name="reglname"
              id="reglname"
              placeholder="Last Name"
              onChange={(e) => setlName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-6">
            <input
              type="text"
              id="regem"
              name="regem"
              placeholder="Email"
              className="h-10 rounded-3xl p-6 w-60"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Date of Birth"
              type="datetime-local"
              className="h-10 rounded-3xl p-6 w-60"
              id="regdob"
              value={dob}
              onChange={(e) => {
                const date1 = new Date(e.target.value); // First date
                const date2 = new Date(); // Second date (current date)

                const differenceInMilliseconds =
                  date2.getTime() - date1.getTime();
                const differenceInSeconds = Math.floor(
                  differenceInMilliseconds / 1000
                );
                const differenceInMinutes = Math.floor(
                  differenceInSeconds / 60
                );
                const differenceInHours = Math.floor(differenceInMinutes / 60);
                const differenceInDays = Math.floor(differenceInHours / 24);

                console.log(`The difference is ${differenceInDays} days.`);

                if (differenceInDays < 0) {
                  alert("Invalid Date of Birth");
                  setdob("");
                } else {
                  setdob(e.target.value);
                }
                console.log(dob);
              }}
              name="regdob"
              // onChange={(e)=>{}}
            />
          </div>
          <div className="flex items-center gap-6">
            <input
              type="password"
              id="passw"
              name="passw"
              placeholder="Password"
              className="h-10 rounded-3xl p-6 w-60"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirm Password"
              type="password"
              id="cpassw"
              name="cpassw"
              className="h-10 rounded-3xl p-6 w-60"
              onChange={(e) => {
                handlecpass(e);
                console.log(cpassword);
              }}
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="wrapper">
              <input
                type="radio"
                name="select"
                id="option-1"
                // defaultcheceked
                checked={gender === "female"}
                value="female"
                onChange={() => setGender("female")}
                onSelect={() => setGender("female")}
              />
              <input
                type="radio"
                name="select"
                id="option-2"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
                onSelect={() => setGender("male")}
              />
              <input
                type="radio"
                name="select"
                id="option-3"
                value="other"
                checked={gender === "other"}
                onChange={() => setGender("other")}
                onSelect={() => setGender("other")}
              />
              <label htmlFor="option-1" className="option option-1">
                <div className="dot"></div>
                <span>Female</span>
              </label>
              <label htmlFor="option-2" className="option option-2">
                <div className="dot"></div>
                <span>Male</span>
              </label>
              <label htmlFor="option-3" className="option option-3">
                <div className="dot"></div>
                <span>Other</span>
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="regbtn rounded-3xl hover:bg-yellow-300 mx-auto text-white text-center h-[2.5rem] w-[10rem] bg-[#e2bb20ee] items-center"
              onClick={() => {
                createUser(
                  fname + lname,
                  password,
                  email,
                  gender,
                  dob,
                  av,
                  nuser,
                  pb
                );
                setisRegistered(true);
              }}
            >
              REGISTER
            </button>
          </div>
          {isRegistered ? (
            <button className="regbtn rounded-3xl hover:bg-yellow-300 mx-auto text-white text-center h-[2.5rem] w-[10rem] bg-[#e2bb20ee] items-center">
              <Link href="/mainpage">MAIN PAGE</Link>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}