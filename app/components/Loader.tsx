"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/src/store/sidebarStore";
import { Loader, Placeholder } from "rsuite";

const PageLoader = () => {
  const open = useSidebar((state) => state.open);
  return (
    <div
      className={cn(
        "flex justify-center items-center h-screen ml-20",
        open && "ml-72"
      )}
    >
      <Placeholder.Grid style={{ color: "black" }} rows={5} columns={3} />
      <Loader size="md" content="Loading..." vertical />
    </div>
  );
};

export default PageLoader;
