"use client";
import React, { useState, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import GlobalContext from "./GlobalContetxts";
import PocketBase from "pocketbase";

const GlobalStates = ({ children }) => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [glogin, setgLogin] = useState(false);
  const [guser, setgUser] = useState(null);
  const [gage, setgage] = useState(0);
  const [guserid, gsetuserid] = useState(null);
  const [gavatar, setgavatar] = useState(1);
  const [gicon, setgicon] = useState(null);
  const sectionrefs = useRef(null);
  const [grole, setgrole] = useState(null);
  const inforefs = useRef(null);
  const statrefs = useRef(null);
  const missrefs = useRef(null);
  const ghandlelogin = () => {
    setgLogin(true);
  };

  useEffect(() => {
    console.log({ guserid });
  }, [guserid]);

  useEffect(() => {
    console.log("I check if I'm logged in");
    if (localStorage.getItem("pocketbase_auth") == null) return;
    console.log("I passed through level one");

    setgLogin(true);

    console.log("I passed through level two");

    pb.collection("users")
      .authRefresh()
      .then((res) => {
        console.log({ res });
        setgLogin(pb.authStore.baseToken !== "");
      });
    console.log("I passed through level threez");

    return () => console.log("unmounting useEffect1");
  }, []);
  useEffect(() => {
    console.log({ gloginFromMe: glogin });
    const stateRetriver = async () => {
      if (glogin === true) {
        /*   const { username, id, dob, avatar, role  } = await pb
          .collection("users")
          .getFirstListItem(`email='${email}'`); */
        console.log({ pbFromMe: pb.authStore.model });
        const { username, id, dob, avatar, role } = pb.authStore.model;
        setgicon(avatar);
        setgrole(role);
        setgUser(username);
        gsetuserid(id);

        const today = new Date();
        // Age systtem
        const birthday = new Date(dob);
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
      }
    };
    stateRetriver();
  }, [glogin]);
  return (
    <GlobalContext.Provider
      value={{
        pb,
        statrefs,
        missrefs,
        gicon,
        setgicon,
        gsetuserid,
        glogin,
        setgLogin,
        guser,
        setgUser,
        ghandlelogin,
        guserid,
        gage,
        setgage,
        gsetuserid,
        gavatar,
        setgavatar,
        sectionrefs,
        inforefs,
        grole,
        setgrole,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalStates;