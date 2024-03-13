"use client";
import Button from "@/components/Button";
import Dashboard from "@/components/Dashboard";
import Input from "@/components/Input";
import Navigation from "@/components/Navigation";
import UserContext from "@/components/UserContext";
import { COLUMNS } from "@/data/columns";
import { INPUTS } from "@/data/inputs";
import Fault from "@/util/error.js";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const Page = ({ params }) => {
  const { user, setUser } = useContext(UserContext);
  const [data, setdata] = useState({});
  const submit = () => {
    let ready = true;
    if (!user) return;
    INPUTS[params.type].map((input) => {
      if (!data[input]) {
        toast("Please fill all the fields");
        ready = false;
        return;
      }
    });
    if (ready)
      fetch("/api/" + params.type, {
        method: "POST",
        body: JSON.stringify({ ...user, ...data }),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res.message);
          if (res.message == "No such item") toast("❌ No such item");
          if (res.message == "Store not in range")
            toast("❌ Store not in range");
          if (res.message == "Not enough units") toast("❌ Not enough units");
          if (res.message == "Order placed") toast("✔️ Success");
        })
        .catch((err) => {
          console.log(err.message);
        });
  };

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <title>{params.type}</title>
      <Navigation />
      <div className="w-full flex justify-center items-start bg-hackathon-page h-screen py-12 lg:py-0 z-0 px-4">
        <div className="w-full">
          <div className="flex items-center my-2 text-4xl font-bold bg-gradient-to-r from-tm-purple to-blue-400 bg-clip-text text-transparent w-fit">
            {params.type}
          </div>
          {INPUTS[params.type].map((input, index) => (
            <Input
              key={index}
              name={input}
              type="text"
              title=""
              placeholder={input}
              value={data[input]}
              user={data}
              setUser={setdata}
              maxLength={100}
            />
          ))}
          <Button onClick={submit} text="SUBMIT" color="black" />
        </div>
      </div>
    </div>
  );
};

export default Page;
