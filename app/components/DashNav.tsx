"use client";

import { cn, truncateEmail } from "@/lib/utils";
import { useSidebar } from "@/src/store/sidebarStore";
import { Bell, Mails, Search, UserCircle2 } from "lucide-react";
import { useSession } from "next-auth/react";

const DashNav = () => {
  const { data: session } = useSession();
  const open = useSidebar((state) => state.open);
  return (
    <div className="flex items-center justify-between h-16 shadow-lg px-6">
      <div className={cn("flex items-center rounded-lg", open ? 'pl-[180px]' : 'pl-20')}>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-200 outline-none pl-3 w-80 rounded-tl-md rounded-bl-md h-8 placeholder:text-sm leading-5 font-normal"
        />
        <div className="bg-dark-purple h-8 items-center justify-center flex px-3.5 cursor-pointer rounded-tr-md rounded-br-md">
          <Search className="text-white" size={15} />
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        <div className="flex items-center gap-6 border-r-2 pr-6">
          <Bell size={20} />
          <Mails size={20} />
        </div>
        <div className="flex items-center gap-3.5 relative">
          <p>
            Hello,
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
    </div>
  );
};

export default DashNav;
