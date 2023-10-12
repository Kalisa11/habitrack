"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/src/store/sidebarStore";
import { Button } from "./ui/button";
import Link from "next/link";

const GuestView = () => {
  const open = useSidebar((state) => state.open);

  return (
    <>
      <section
        className={cn(
          "relative flex items-center justify-center z-10 bg-slate-100 ml-20 h-screen py-32",
          open && "ml-72"
        )}
      >
        <div className="container">
          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[60px] font-bold leading-none text-red-500 sm:text-[80px] md:text-[100px]">
                  401 <span className="text-lg">Unauthorized</span>
                </h2>
                <h4 className="mb-3 text-base font-semibold leading-tight text-dark-purple">
                  Oops! You aren&apos;t authorized to view this page
                </h4>
                <p className="mb-8 text-base text-gray-600">
                  Please login to view this page.
                </p>
                <Link href="/login">
                  <Button type="button">Login</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          <div className="flex w-1/3 h-full">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
        </div>
      </section>
    </>
  );
};

export default GuestView;
