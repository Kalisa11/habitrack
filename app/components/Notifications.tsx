"use client";

import { Bell, Flame } from "lucide-react";
import { useState } from "react";
import { Button } from "@components/ui/button";

const Notifications = () => {
  const [showAll, setShowAll] = useState(false);

  const notifications = [
    {
      title: "Hot streak",
      description: "Your current streak is 1 week! Keep it up!",
      timestamp: "2 days ago",
    },
    {
      title: "Daily reminder",
      description: "Don't forget to drink water today",
      timestamp: "2 hours ago",
    },
    {
      title: "Achievement unlocked",
      description: "You've earned the 'Consistency Champion' badge",
      timestamp: "3 days ago",
    },
    // Add more notification objects here
  ];

  const visibleNotifications = showAll
    ? notifications
    : notifications.slice(0, 2);

  return (
    <>
      {visibleNotifications.map((notification, index) => (
        <div
          className="flex border-b-2 gap-2 pt-2 pb-4 items-center"
          key={index}
        >
          <Flame size={30} className="text-yellow-500" />
          <div className="flex flex-col max-w-xs">
            <p className="font-semibold text-md">{notification.title}</p>
            <p className="font-light text-xs">{notification.description}</p>
            <p className="text-gray-500 text-xs">{notification.timestamp}</p>
          </div>
          <div className="rounded-full bg-red-500 h-2 w-2 ml-auto"></div>
        </div>
      ))}

      {notifications.length > 2 && (
        <div className="flex items-center justify-center">
          <Button className=" mt-4" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>
      )}

      {notifications.length === 0 && (
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full bg-gray-100 p-3">
            <Bell className="text-gray-500" />
          </div>
          <p>No new notifications</p>
        </div>
      )}
    </>
  );
};

export default Notifications;
