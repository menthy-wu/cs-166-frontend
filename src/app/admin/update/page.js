import Navigation from "@/components/Navigation";
import Order from "@/components/Order";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <title>order</title>
      <Navigation />
      <div className="w-full flex justify-center items-start bg-hackathon-page h-screen py-12 lg:py-0 z-0 px-4">
        <div className="w-full h-full">
          <div className="flex items-center my-2 text-4xl font-bold bg-gradient-to-r from-tm-purple to-blue-400 bg-clip-text text-transparent w-fit">
            Order
          </div>
          <div className="w-full h-[80vh] items-center justify-center flex">
            <Order />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
