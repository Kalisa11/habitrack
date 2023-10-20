"use client";

import { Bell, Mails as MailsIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@components/ui/button";

const Mails = () => {
  const [showAll, setShowAll] = useState(false);

  const mails = [
    {
      title: "You're Invited",
      description: "Join us for a virtual seminar on productivity next Friday.",
      timestamp: "Yesterday",
    },
    {
      title: "You're Invited",
      description: "Join us for a virtual seminar on productivity next Friday.",
      timestamp: "Yesterday",
    },
    {
      title: "You're Invited",
      description: "Join us for a virtual seminar on productivity next Friday.",
      timestamp: "Yesterday",
    },
  ];

  const visibleMails = showAll ? mails : mails.slice(0, 2);

  return (
    <>
      {visibleMails.map((mail, index) => (
        <div className="flex items-center" key={index}>
          <div className="flex border-b-2 w-full gap-3 pt-2 pb-4 items-center justify-between">
            <Bell size={30} className="text-yellow-500" />
            <div className="flex flex-col max-w-xs">
              <p className="font-semibold text-md">{mail.title}</p>
              <p className="font-light text-xs">{mail.description} </p>
              <p className="text-gray-500 text-xs">{mail.timestamp}</p>
            </div>
          </div>
          <div className="rounded-full bg-red-500 h-2 w-2"></div>
        </div>
      ))}

      {mails.length > 2 && (
        <div className="flex items-center justify-center">
          <Button className="mt-4" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "View All"}
          </Button>
        </div>
      )}

      {mails.length === 0 && (
        <div className="flex flex-col items-center gap-3 justify-center">
          <div className="rounded-full bg-gray-100 p-3 ">
            <MailsIcon className="text-gray-500" />
          </div>
          <p>No new mails</p>
        </div>
      )}
    </>
  );
};

export default Mails;
