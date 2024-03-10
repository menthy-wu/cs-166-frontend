"use client";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const Order = () => {
  const [orderdata, setOrderdata] = useState({
    storeID: "",
    productName: "",
    numberofUnits: "",
  });
  const order = () => {
    console.log(orderdata);
  };

  return (
    <div className="rounded-lg p-12 w-1/3 bg-white flex flex-col justify-center items-start h-fit gap-3 drop-shadow-[20px_15px_35px_rgba(0,0,0,0.25)]">
      <Input
        name="storeID"
        type="text"
        title="storeID"
        placeholder="storeID"
        value={orderdata.storeID}
        user={orderdata}
        setUser={setOrderdata}
        maxLength={100}
      />
      <Input
        name="productName"
        type="text"
        title="productName"
        placeholder="productName"
        value={orderdata.productName}
        user={orderdata}
        setUser={setOrderdata}
        maxLength={100}
      />
      <Input
        name="numberofUnits"
        type="text"
        title="numberofUnits"
        placeholder="numberofUnits"
        value={orderdata.numberofUnits}
        user={orderdata}
        setUser={setOrderdata}
        maxLength={100}
      />
      <Button onClick={order} text="SUBMIT" color="black" />
    </div>
  );
};

export default Order;
