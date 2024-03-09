"use client";
import Dashboard from "@/components/Dashboard";
import Table from "@/components/Table";
import { COLUMNS } from "@/data/columns";
import Fault from "@/util/error.js";

const Page = ({ params }) => {
  const components = {
    store: { something: "" },
    product: {},
  };

  if (components.hasOwnProperty(params.type)) {
    return (
      <div className="h-full font-poppins flex flex-col py-4 gap-3 w-full">
        <Dashboard
          title={params.type}
          columns={COLUMNS[params.type]}
          page={params.type}
          // Dropdown
          empty={`no ${params.type}`}
        />
      </div>
    );
  } else {
    throw new Fault(
      404,
      "Page Not Found",
      "The page you are looking for does not seem to exist"
    );
  }
};

export default Page;
