"use client";

import { useOpenMail } from "@/src/store/mailStore";
import { Bell, Flame } from "lucide-react";
import { Drawer } from "rsuite";

const Mails = () => {
  const open = useOpenMail((state) => state.open);
  const setOpen = useOpenMail((state) => state.setOpen);

  return (
    <Drawer
      size={"xs"}
      placement={"right"}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Drawer.Header>
        <Drawer.Title className="font-semibold">Inbox</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        {Array.from({ length: 2 }, (_, i) => (
          <div className="flex items-center" key={i}>
            <div className="flex border-b-2 w-full gap-3 pt-2 pb-4 items-center justify-between">
              <Bell size={40} className="text-yellow-500" />
              <div className="flex flex-col">
                <p className="font-semibold text-base">You&apos;re Invited</p>
                <p className="font-light text-sm">
                  Join us for a virtual seminar on productivity next Friday.
                </p>
                <p className="text-gray-500 text-xs">Yesterday</p>
              </div>
            </div>
            <div className="rounded-full bg-red-500 h-2 w-2"></div>
          </div>
        ))}
      </Drawer.Body>
    </Drawer>
  );
};

export default Mails;
