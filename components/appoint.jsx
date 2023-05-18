import React, { useContext } from "react";
import GlobalContext from "../app/api/contexts/GlobalContetxts";

const Appoint = ({ user, date, time, reason, value }) => {
  const { pb } = useContext(GlobalContext);
  const del = async (id, pb) => {
    await pb.collection("appointments").delete(id);
  };
  return (
    <div className="w-[75%] flex flex-row justify-around mx-10">
      <div className="h-20 w-[20%] bg-[#e2b808] my-auto text-center text-lg rounded-lg flex flex-col justify-center align-middle gap-5">
        <div className="align-middle">{user}</div>
      </div>
      <div className="h-20 w-[20%] bg-[#e2b808] my-auto text-center text-lg rounded-lg flex flex-col justify-center">
        {date}
      </div>
      <div className="h-20 w-[20%] bg-[#e2b808] my-auto text-center text-lg rounded-lg flex flex-col justify-center">
        {reason}
      </div>
      <div className="h-20 w-[20%] bg-[#e2b808] my-auto text-center text-lg rounded-lg flex flex-col justify-center">
        {time}
      </div>

      {value !== undefined && value !== null && value != "" ? (
        <button
          className="bg-[#e2b808] h-20 w-[100px]"
          value={value}
          onClick={()=>del(value, pb)}
        >
          REJECT
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Appoint;
