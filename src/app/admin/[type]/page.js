"use client";
import Dashboard from "@/components/Dashboard";
import Table from "@/components/Table";
import { ACTIONS } from "@/data/actions";
import { COLUMNS } from "@/data/columns";
import Fault from "@/util/error.js";

const Page = ({ params }) => {
  const components = {
    users: { something: "" },
  };
  console.log(ACTIONS[params.type].action);

  if (components.hasOwnProperty(params.type)) {
    return (
      <div className="h-full font-poppins flex flex-col py-4 gap-3 w-full">
        <Dashboard
          title={params.type}
          columns={COLUMNS[params.type]}
          page={params.type}
          action={ACTIONS[params.type].action}
          actionText={ACTIONS[params.type].text}
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
