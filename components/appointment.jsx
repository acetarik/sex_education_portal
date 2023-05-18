"use client";
import React, { useState, useContext } from "react";
// import SelectDemo from "./select";
import Link from "next/link";
import GlobalContext from "../app/api/contexts/GlobalContetxts";
import PocketBase from "pocketbase";

const Appointment = ({
  settime,
  setdate,
  setconcern,
  setapp,
  date,
  consultantid,
}) => {
  const {
    glogin,
    setgLogin,
    guser,
    pb,
    setgUser,
    ghandlelogin,
    gsetuserid,
    guserid,
  } = useContext(GlobalContext);
  const [appdate, setappdate] = useState("");
  const handlesetAppDate = (e) => {
    setappdate(e.target.value);
    const date1 = new Date(appdate);
    const date2 = new Date();

    const differenceInMilliseconds = date2.getTime() - date1.getTime();
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);

    console.log(`The difference is ${differenceInDays} days.`);
    if (differenceInDays > 0) {
      setappdate("");
      alert("Cannot book appointment for past dates");
    }
  };

  const [textareaValue, setTextareaValue] = useState("");
  const [selTime, setSelTime] = useState("");
  // const [date, setDate] = useState("");
  async function handleSubmit(pb) {
    try {
      // const pb = new PocketBase("http://127.0.0.1:8090");//!ye nikala

      // example create data
      const data = {
        date_time: new Date(appdate),
        // user: "mkoga8z9lb6r87d",
        user: `${guserid}`,
        // consultant: "dvon7hbmdrh0yoy",
        time_slots: `${selTime}`,
        consultant: `${consultantid}`,
        reason: `${textareaValue}`,
      };

      const record = await pb.collection("appointments").create(data);
      alert("appointment created");
    } catch (error) {
      alert(error);
    }
  }
  const handleTextareaChange = async (event) => {
    setTextareaValue(event.target.value);
    setconcern(textareaValue);
    console.log(textareaValue);
  };
  const handleChange = (e) => {
    setSelTime(e.target.value);
    settime(selTime);
    console.log(selTime);
  };
  const handleDateChange = (event) => {
    setSelTime(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center top-0 left-0 h-screen w-screen  absolute z-20 text-center ">
      <div className="flex flex-col h-[50%] w-[30%] justify-center text-center bg-[#e2b808] mx-auto gap-5 rounded-3xl z-50 blur-none absolute translate-x-[120%]">
        <textarea
          className="rounded-3xl w-[80%] mx-auto"
          value={textareaValue}
          onChange={handleTextareaChange}
          cols={150}
          rows={5}
        />
        <input
          height={20}
          type="date"
          placeholder="Date"
          className="text-center mx-auto w-[80%] rounded-3xl h-10 p-5"
          onChange={(event) => handlesetAppDate(event)}
        />
        <div className="flex flex-row justify-center gap-6">
          <div
            className="bg-white h-19 rounded-3xl w-40 my-auto p-2"
          >
            <label htmlFor="">TIME</label>
            <select
              value={selTime}
              onChange={handleChange}
              name="time"
              id="time"
            >
              <option value="morning">9:00 - 11:50 AM</option>
              <option value="noon">12:00 - 2:50 PM</option>
              <option value="afternoon">3:00 - 5:50 PM</option>
              <option value="evening">6:00 - 8:50 PM</option>
            </select>
          </div>
        </div>
        <button
          className="h-12 rounded-3xl bg-[#258730] w-40 text-[#fcfaf4] font-semibold mx-auto "
          onClick={() => {
            console.log(guserid);

            handleSubmit(pb);
            setapp(false);
          }}
        >
          Book
        </button>
        <button
          className="h-12 rounded-3xl bg-[#258730] w-40 text-[#fcfaf4] font-semibold mx-auto "
          onClick={() => {
            console.log(guserid);

            setapp(false);
          }}
        >
          Close
        </button>
      </div>
      {/*
      // <button className="h-10 w-30 bg-yellow-800">
      //   <Link href="/mainpage"> back to main page</Link>
        // </button>*/}
    </div>
  );
};
export default Appointment;
