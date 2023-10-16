"use client";

import { useOpenNotifications } from "@/src/store/notificationStore";
import { Bell, Flame } from "lucide-react";
import { Drawer } from "rsuite";

const Notifications = () => {
  const open = useOpenNotifications((state) => state.open);
  const setOpen = useOpenNotifications((state) => state.setOpen);

  return (
    <Drawer
      size={"xs"}
      placement={"right"}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Drawer.Header>
        <Drawer.Title className="font-semibold">Notifications</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        {Array.from({ length: 5 }, (_, i) => (
          <div
            className="flex border-b-2 w-full gap-2 pt-2 pb-4 items-center justify-between"
            key={i}
          >
            <Flame size={30} className="text-yellow-500" />
            <div className="flex flex-col">
              <p className="font-semibold text-base">Hot streak</p>
              <p className="font-light text-sm">
                Your current streak is{" "}
                <span className="font-semibold">1 week</span>
              </p>
              <p className="text-gray-500 text-xs">2 days ago</p>
            </div>
            <div className="rounded-full bg-red-500 h-2 w-2"></div>
          </div>
        ))}
      </Drawer.Body>
    </Drawer>
  );
};

export default Notifications;
