"use client";
import React, { useEffect, useState, useContext } from "react";
import PocketBase from "pocketbase";
import Link from "next/link";
import GlobalContext from "../app/api/contexts/GlobalContetxts";

const Dahsboard = ({ date_time, consultant, time_slots, value, pb }) => {
  const deleteAppointment = async (id, pb) => {
    // const pb = new PocketBase("http://127.0.0.1:8090");
    await pb.collection("appointments").delete(id);
  };
  return (
    <div className="flex flex-row text-center gap-10">
      <div className="bg-yellow-500 w-[30%] h-10  rounded-lg my-3 ">
        {consultant}
      </div>
      <div className="bg-yellow-500 w-[30%] h-10   rounded-lg my-3 ">
        {date_time}
      </div>
      <div className="bg-yellow-500 w-[30%] h-10   rounded-lg my-3">
        {time_slots}
      </div>
      <div className="bg-yellow-500 w-[30%] h-10   rounded-lg my-3">
        <button
          className="button hover:bg-red-500 bg-[#e2b808] text-white"
          onClick={(e) => {
            deleteAppointment(e.target.value, pb);
          }}
          value={`${value}`}
        >
          {" "}
          delete
        </button>
      </div>
    </div>
  );
};
const Userdash = () => {
  const [craver, setcraver] = useState([]);
  const bro = useContext(GlobalContext);
  const { guserid, pb } = bro;

  const getAppointmentsWithConsultants = async (pb) => {
    1;
    console.log({ guserid });
    // const pb = new PocketBase("http://127.0.0.1:8090");
    const record = await pb.collection("appointments").getFullList({
      //! ye theek krna hai
      filter: `user="${pb.authStore.model.id}"`,
      // filter: `user="${guserid}"`,
      // filter: `user="mkoga8z9lb6r87d"`,

      expand: "consultant",
    });
    const namesArray = record.map((obj) => {
      const { date_time, expand, time_slots, id } = obj;
      const date = new Date(date_time);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const full_date = `${day}/${month}/${year}`;
      return { expand, date_time, time_slots, full_date, id };
    });
    console.log({ record: record });
    console.log({ namesArray });
    setcraver(namesArray);
    return namesArray;
  };
  useEffect(() => {
    getAppointmentsWithConsultants(pb);
  }, []);

  return (
    <div className="h-max w-screen place-items-center place-content-center flex flex-col text-white text-4xl font-Raleway text-center mx-auto">
      <div className=" flex flex-col justify-center h-20 w-[40%] rounded-lg bg-[#e2b608dc] mx-auto text-center">
        <b className=" mx-auto text-center">Your Appointments</b>
      </div>

      <div className="flex-grow bg-[#910c00] flex flex-col justify-center mx-auto">
        {(craver.length == 0 && <div>NO APPOINTMENTS BOOKED</div>) ||
          craver.map((obj, index) => {
            return (
              <Dahsboard
                key={index}
                date_time={obj.full_date}
                consultant={obj.expand.consultant.username}
                time_slots={obj.time_slots}
                value={obj.id}
                pb={pb}
              />
            );
          })}
      </div>
      <Link href="/userui">
        <button className="bg-[#e2b808] w-[200px] h-20 mt-10"> BACK </button>
      </Link>
    </div>
  );
};

export default Userdash;
