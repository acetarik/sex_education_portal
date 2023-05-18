"use client";
import React from "react";
import Userdash from "../../../components/userdashboard";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("pocketbase_auth") == null)
      router.push(`/mainpage`);
  }, []);
  return (
    <div className="flex flex-col text-center h-max w-max place-items-end ">
      <Userdash />
    </div>
  );
};
export default page;
