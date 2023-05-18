"use client";
import React, { useContext, useState, useEffect } from "react";
import Appoint from "../../components/appoint";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";
import GlobalContext from "../api/contexts/GlobalContetxts";
const Paage = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  const bro = useContext(GlobalContext);

  const { guserid, pb } = bro;
  const [shameekhArray, setShameekhArray] = useState([]);
  const newDiv = async (pb) => {
    // const pb = new PocketBase("http://127.0.0.1:8090");
    console.log({ guserid });
    // const { username } = await pb.collection("users").getOne(guserid);

    const record = await pb.collection("appointments").getFullList({
      filter: `consultant="${guserid}"`,

      expand: "user",
    });

    const namesArray = record.map((obj) => {
      const { date_time, expand, reason, time_slots, id } = obj;
      const date = new Date(date_time);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const full_date = `${day}/${month}/${year}`;
      return { expand, date_time, reason, time_slots, full_date, id };
    });
    console.log({ record: record });
    console.log({ namesArray });
    setShameekhArray(namesArray);
    return namesArray;
  };
  useEffect(() => {
    newDiv(pb);
  }, []);

  return (
    <div className="flex flex-col text-center h-screen bg-[#fcfaf4]">
      <h1 className="infopagetitle text-[#2a601d]">CURRENT APPOINTMENTS</h1>
      <div className="mx-auto h-auto rounded-xl w-[70%] bg-[#2b7425] mb-8">
        {/* ACKNOWLEDGEMENT DUE AS SHAMEEKH HELPED HERE! */}
        {shameekhArray.length == 0 ? (
          <>
            <div className="rounded-md text-white text-[25px] font-bold mx-auto bg-[#e2b808] w-auto h-10 text-center">
              <b>NO APPOINTMENTS</b>
            </div>
          </>
        ) : (
          <>
            <div className="mb-10">
              <Appoint
                user={"NAME"}
                date={"DATE"}
                reason={"CONCERN"}
                time={"TIME"}
              />
            </div>
            {shameekhArray.map((obj, index) => (
              <Appoint
                key={index}
                user={obj.expand.user.username}
                date={obj.full_date}
                reason={obj.reason}
                time={obj.time_slots}
                value={obj.id}
              />
            ))}
          </>
        )}
      </div>
      <Link href="/userui" className="mx-auto">
        <button className="bg-[#e2b808] w-40 h-10 rounded-3xl hover:bg-[#2a601d] text-[20px] font-semibold text-white">
          HOME
        </button>
      </Link>
    </div>
  );
};

export default Paage;
