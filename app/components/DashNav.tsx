"use client";

import { cn, truncateEmail } from "@/lib/utils";
import { useOpenNotifications } from "@/src/store/notificationStore";
import { useSidebar } from "@/src/store/sidebarStore";
import { useOpenMail } from "@/src/store/mailStore";
import { Bell, Mails as MailsIcon, Search, UserCircle2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Notifications from "./Notifications";
import Mails from "./Mails";

const DashNav = () => {
  const { data: session } = useSession();
  const open = useSidebar((state) => state.open);
  const openNotifications = useOpenNotifications((state) => state.setOpen);
  const openMail = useOpenMail((state) => state.setOpen);

  return (
    <div className="flex items-center justify-between h-16 shadow-lg px-6">
      <div
        className={cn(
          "flex items-center rounded-lg",
          open ? "pl-[180px]" : "pl-20"
        )}
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-200 outline-none pl-3 w-80 rounded-tl-md rounded-bl-md h-8 placeholder:text-sm leading-5 font-normal"
        />
        <div className="bg-dark-purple h-8 items-center justify-center flex px-3.5 cursor-pointer rounded-tr-md rounded-br-md">
          <Search className="text-white" size={15} />
        </div>
      </div>
      <div className="flex items-center gap-3 relative">
        <div className="flex items-center gap-6 border-r-2 pr-6">
          <button
            onClick={() => openNotifications(true)}
            className="hover:bg-gray-100 p-1 rounded-full relative"
          >
            <Bell size={20} />
            {5 > 0 && (
              <div className="bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center p-1 text-xs absolute -top-1 -right-1">
                {/*  TODO: Replace with real data */}
                {5}
              </div>
            )}
          </button>
          <button
            onClick={() => openMail(true)}
            className="hover:bg-gray-100 p-1 rounded-full relative"
          >
            <MailsIcon size={20} />
            {2 > 0 && (
              <div className="bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center p-1 text-xs absolute -top-1 -right-1">
                {/*  TODO: Replace with real data */}
                {2}
              </div>
            )}
          </button>
        </div>
        <div className="flex items-center gap-3.5 relative">
          <p>
            Hello
            <span className="ml-1">
              {session?.user?.name
                ? session.user.name.split(" ")[0]
                : truncateEmail(session?.user?.email as string)}
            </span>
          </p>
          <div className="cursor-pointer flex items-center justify-center relative">
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <UserCircle2 />
            )}
          </div>
        </div>
      </div>
      <Notifications />
      <Mails />
    </div>
  );
};

export default DashNav;
