"use client";
import React, { useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import UserContext from "./UserContext";

const Order = () => {
  const { user } = useContext(UserContext);
  const [orderdata, setOrderdata] = useState({
    storeid: "",
    productName: "",
    numberofunits: "",
  });
  const order = () => {
    if (!user) return;
    if (
      !orderdata.storeid ||
      !orderdata.productName ||
      !orderdata.numberofunits
    )
      return;
    fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({ ...user, ...orderdata }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="rounded-lg p-12 w-1/3 bg-white flex flex-col justify-center items-start h-fit gap-3 drop-shadow-[20px_15px_35px_rgba(0,0,0,0.25)]">
      <Input
        name="storeid"
        type="text"
        title="store id"
        placeholder="storeid"
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
        name="numberofunits"
        type="text"
        title="numberofunits"
        placeholder="numberofunits"
        value={orderdata.numberofunits}
        user={orderdata}
        setUser={setOrderdata}
        maxLength={100}
      />
      <Button onClick={order} text="SUBMIT" color="black" />
    </div>
  );
};

export default Order;
