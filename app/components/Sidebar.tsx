"use client";

import { FC, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  ChevronLeftCircle,
  ClipboardSignature,
  Component,
  LayoutDashboard,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const Sidebar: FC = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const Menus = [
    { title: "Dashboard", icon: <LayoutDashboard />, link: "/" },
    { title: "Habits", icon: <ClipboardSignature />, link: "/habits" },
    { title: "Calendar", icon: <CalendarDays />, gap: true, link: "/calendar" },
    { title: "Analytics", icon: <BarChart3 />, link: "/analytics" },
    { title: "Profile", icon: <UserCircle />, gap: true, link: "/profile" },
    { title: "Settings", icon: <Settings />, link: "/settings" },
  ];
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
    >
      <ChevronLeftCircle
        className={`absolute text-white cursor-pointer right-1 top-9 w-7
        ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <Component
          size={40}
          className={`text-white cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        {/* <img
            src="/assets/logo.svg"
            className={`cursor-pointer duration-500 left-0 ${
              open && "rotate-[360deg]"
            }`}
          />  */}
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Habitrack
        </h1>
      </div>
      <div className="pt-6">
        {Menus.map((Menu, index) => (
          <Link
            href={Menu.link}
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              Menu.link === pathname && "bg-light-white"
            } `}
          >
            {Menu.icon}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-5 left-5">
        <button
          className="flex items-center p-2 rounded-md cursor-pointer text-sm text-gray-300 hover:bg-light-white gap-x-4"
          onClick={() => signOut()}
        >
          <LogOut />
          <span className={`${!open && "hidden"}`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
