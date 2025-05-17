import React from "react";
import Sidebar from "@/components/common/sidebar";
import Heading from "@/components/common/heading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid bg-secondary-white h-screen w-full lg:grid-cols-[270px_1fr]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex flex-col overflow-hidden">
        <Heading />
        <main className="flex-1 flex flex-col gap-4 m-6 mt-4 mb-6 lg:gap-6 overflow-y-auto overflow-x-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
