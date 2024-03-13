"use client";
import Dashboard from "@/components/Dashboard";
import { COLUMNS } from "@/data/columns";
import Fault from "@/util/error.js";

const Page = ({ params }) => {
  return (
    <div className="h-full font-poppins flex flex-col py-4 gap-3 w-full">
      <Dashboard
        title={params.type}
        columns={COLUMNS[params.type]}
        page={params.type}
        empty={`no ${params.type}`}
      />
    </div>
  );
};

export default Page;
