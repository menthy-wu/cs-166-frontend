"use client";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Toolbar from "./Toolbar.jsx";
import Table from "./Table.jsx";
import Navigation from "./Navigation.jsx";

const Dashboard = ({
  title,
  columns,
  page,
  tags,
  statuses,
  Dropdown,
  empty,
  action,
  actionText,
}) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState([]);

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
          <Toolbar
            page={page}
            filters={filters}
            setFilters={setFilters}
            data={data}
            setData={setData}
            tags={tags}
            getFilteredSelectedRowModel={getFilteredSelectedRowModel}
            toggleAllRowsSelected={toggleAllRowsSelected}
            setLoading={setLoading}
          />
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
            action={action}
            actionText={actionText}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
