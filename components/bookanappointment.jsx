"use client";
import React, { useState, useEffect, useContext } from "react";
import PocketBase from "pocketbase";
//TODO : make cards for available consultants
import Appointment from "./appointment";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
import Link from "next/link";
import ConsulCards from "./consultantcards";
// import Modals from "./nextui/modal";
async function broconsultants(setConsultants, pb) {
  // const { pb } = useContext(GlobalContext);
  try {
    // const pb = new PocketBase("http://127.0.0.1:8090");

    const record = await pb
      .collection("users")
      .getFullList({ filter: "role='consultant'" });
    console.log(1);
    const namesArray = record.map((obj) => {
      const { username, id } = obj;
      return { username, id };
    });
    // filter: "role=user",
    console.log({ record: namesArray });
    setConsultants(namesArray);
  } catch (error) {
    console.log("Error:", error);
    alert("Failed to retrieve records.");
  }
}
const BookAnApp = ({ setconcern, settime, setdate, date }) => {
  const [consultants, setConsultants] = useState([]);
  const { pb } = useContext(GlobalContext);
  useEffect(() => {
    broconsultants(setConsultants, pb);
    // setConsultants(broconsultants());
  }, []);
  useEffect(() => {
    console.log({ CONS: consultants });
  }, [consultants]);
  return (
    <div>
      <div className="flex flex-col  justify-center top-0 left-0 h-screen w-screen py-20 text-center broli">
        <div className="text-center">
          <h1 className="infopagetitle text-[#fcfaf4]">BOOK AN APPOINTMENT</h1>
        </div>
        <div className=" mx-auto flex flex-row justify-center gap-[2rem] h-[100%] sm:w-[100%] flex-wrap">
          {consultants.map((consultant, undex) => (
            <ConsulCards
              key={undex}
              name={`${consultant.username}`}
              value={consultant.id}
              settime={settime}
              setdate={setdate}
              date={date}
              setconcern={setconcern}
            /> //!todo: add id to key
          ))}
        </div>
        <button className="h-20 w-60 mx-auto text-[20px] text-[#fcfaf4] font-semibold hover:bg-[#ec8e4a] bg-[#d6630f]">
          <Link href="/userui">MAIN PAGE</Link>
        </button>
      </div>
    </div>
  );
};
export default BookAnApp;
