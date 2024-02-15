import React, { useState } from "react";

import alert from "../assets/alert.png";
import automation from "../assets/automation.png";
import trading from "../assets/trading.png";
import trainig from "../assets/trainig.png";
import person from "../assets/person.png";
import profile from "../assets/profile.png";
import street_suite_logo from "../assets/street_suite_logo.png";

export const Sidebar = () => {
  // const [open, setOpen] = useState(true);
  // const Menus = [
  //   { title: "Dashboard", src: "Chart_fill" },
  //   { title: "Inbox", src: "Chat" },
  //   { title: "Accounts", src: "User", gap: true },
  //   { title: "Schedule ", src: "Calendar" },
  //   { title: "Search", src: "Search" },
  //   { title: "Analytics", src: "Chart" },
  //   { title: "Files ", src: "Folder", gap: true },
  //   { title: "Setting", src: "Setting" },
  // ];

  return (
    <div className="bg-zinc-950 flex-none w-14 sm:w-20 h-screen">
      <div className="h-20 items-center flex">
        <img
          src={street_suite_logo}
          width={50}
          className="text-gray-300 left-3 sm:left-6 fixed"
        />
      </div>
      <div className="fixed left-3 sm:left-6 top-[100px]">
        <img
          src={alert}
          width={40}
          className="p-2 rounded-lg mb-4 text-gray-300"
        />
        <img
          src={trainig}
          width={40}
          className="p-2 rounded-lg mb-4 text-gray-300"
        />
        <img
          src={automation}
          width={40}
          className="p-2 rounded-lg mb-4 text-gray-300"
        />
        <img
          src={profile}
          width={40}
          className="p-2 rounded-lg mb-4 text-gray-300"
        />
        <img
          src={trading}
          width={40}
          className="p-2 rounded-lg mb-4 text-gray-300"
        />
      </div>
      
      <div className="fixed bottom-4 left-3 sm:left-6">
        <img
          src={person}
          width={40}
          className="p-2 rounded-lg mb-4 text-gray-300"
        />
      </div>
    </div>
  );
};
