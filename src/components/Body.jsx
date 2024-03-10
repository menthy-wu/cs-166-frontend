"use client";
import { flexRender } from "@tanstack/react-table";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Button from "./Button";

const Body = ({
  getIsSelected,
  getVisibleCells,
  Dropdown,
  original,
  action,
  actionText,
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div
        className={`flex px-3 py-2 border-b-[1px] items-center ${
          getIsSelected()
            ? "to-tm-blue/20 bg-gradient-to-r from-tm-purple/20"
            : "bg-white"
        }`}
      >
        {getVisibleCells().map(({ id, column, getContext }) => (
          <div
            className={`flex items-center ${column.columnDef.width} w-1/6`}
            key={id}
          >
            {flexRender(column.columnDef.cell, getContext())}
          </div>
        ))}
        {/* {action && (
          <div className="w-1/8">
            <Button onClick={action} text={actionText} color="black" />
          </div>
        )} */}
        {Dropdown && (
          <FaChevronDown
            className={`${
              dropdown && "rotate-180"
            } duration-300 hover:cursor-pointer`}
            onClick={() => setDropdown(!dropdown)}
          />
        )}
      </div>
      {dropdown && <Dropdown object={original} />}
    </>
  );
};

export default Body;
