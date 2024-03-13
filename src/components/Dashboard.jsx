"use client";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useContext, useEffect, useState } from "react";
import Table from "./Table.jsx";
import Navigation from "./Navigation.jsx";
import { INPUTS } from "@/data/inputs.js";
import Input from "./Input.jsx";
import UserContext from "./UserContext.jsx";
import Button from "./Button.jsx";
import toast from "react-hot-toast";

const Dashboard = ({ title, columns, page, tags, Dropdown, empty }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const handleReload = async () => {
    let ready = true;
    INPUTS[page].map((input) => {
      if (!user[input]) {
        toast("Please fill all the fields");
        ready = false;
        return;
      }
    });
    if (ready)
      fetch("/api/" + page, {
        method: "POST",
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.message) {
            console.log(res.message);
            setData(res.message);
          } else {
            setData([]);
          }
        })
        .catch((err) => {
          console.log(err.message);
          setData([]);
        });
  };
  useEffect(() => {
    handleReload();
  }, INPUTS[page]);
  const {
    getHeaderGroups,
    getRowModel,
    getFilteredSelectedRowModel,
    toggleAllRowsSelected,
    getState,
    previousPage,
    getCanPreviousPage,
    nextPage,
    getCanNextPage,
    getPageCount,
  } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setSelected,
    enableRowSelection: true,
    state: {
      rowSelection: selected,
      columnFilters: filters,
    },
  });

  return (
    <div className="flex items-center justify-center w-full h-full ">
      <title>{title}</title>
      <Navigation />
      <div className="w-full flex justify-center items-start bg-hackathon-page h-screen py-12 lg:py-0 z-0 px-4">
        <div className="w-full">
          <div className="flex items-center my-2 text-4xl font-bold bg-gradient-to-r from-tm-purple to-blue-400 bg-clip-text text-transparent w-fit">
            {title}
          </div>
          {INPUTS[page].map((input, index) => (
            <Input
              key={index}
              name={input}
              type="text"
              title=""
              placeholder={input}
              value={user[input]}
              user={user}
              setUser={setUser}
              maxLength={100}
            />
          ))}
          {INPUTS[page]?.length > 0 && (
            <Button onClick={handleReload} text="submit" color="black" />
          )}
          <div className="h-5" />
          <Table
            getHeaderGroups={getHeaderGroups}
            getRowModel={getRowModel}
            getState={getState}
            previousPage={previousPage}
            getCanPreviousPage={getCanPreviousPage}
            nextPage={nextPage}
            getCanNextPage={getCanNextPage}
            getPageCount={getPageCount}
            Dropdown={Dropdown}
            empty={empty}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
