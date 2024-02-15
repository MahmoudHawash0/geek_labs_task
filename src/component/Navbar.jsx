import React from "react";
import notifcation from "../assets/notifcation.png";
import { IoIosSearch } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="relative w-full sm:flex justify-between items-center p-2">
      <p className=" px-4 font-extrabold text-slate-50">
        <span className="mr-2 border-color">|</span>Alerts
      </p>
      <div className="flex py-4">
        <input
          className="w-full mb-1 p-2 bg-zinc-700 rounded-md"
          placeholder="Search By..."
        />
        <img className="ml-6" src={notifcation} alt="searchIcon" />
      </div>
    </div>
  );
};
