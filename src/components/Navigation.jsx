"use client";

import { useContext, useState } from "react";
import LOGO from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { TABS } from "@/data/Navigation";
import { usePathname } from "next/navigation";
import UserContext from "./UserContext";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  const [expand, setExpand] = useState(false);
  const pathName = usePathname();
  const [tabs, setTabs] = useState("user");
  console.log(user);
  return (
    <>
      <div className="flex lg:hidden w-full bg-gradient-to-b from-tm-purple to-tm-blue h-12 items-center fixed z-20">
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <Image src={LOGO} className="w-10 h-10 mx-2" alt={`Logo`} />
          <div className="text-white text-xl font-semibold">
            {pathName.split("/")[2]}
          </div>
        </div>
      </div>
      <div
        className={`z-10 lg:flex lg:w-[15%] h-screen ${
          expand ? "left-0  w-1/2 fixed pt-5" : `hidden`
        }`}
      >
        <div className="bg-gradient-to-b from-tm-purple to-tm-blue flex flex-col justify-start items-center">
          <div className="hidden lg:flex items-center my-3">
            <Image src={LOGO} className="w-10 h-10 mx-2" alt={` Logo`} />
          </div>
          {TABS.map(
            (tab, index) =>
              tab.type.includes(user.type) && (
                <Link
                  key={index}
                  href={tab.link}
                  className="no-underline p-0 w-full"
                >
                  <div
                    onClick={() => setExpand(false)}
                    className={`w-full flex [&>*]:text-white items-center justify-start py-1 pl-[10%] ${
                      pathName.endsWith(tab.link)
                        ? "bg-black"
                        : "[&>*]:hover:text-black"
                    }`}
                  >
                    {tab.icon}
                    <p className="text-lg m-0">{tab.name}</p>
                  </div>
                </Link>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
