import { flexRender } from "@tanstack/react-table";
import Body from "./Body";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSortAlphaDown,
  FaSortAlphaUp,
} from "react-icons/fa";
import Loading from "@/components/Loading";

const Table = ({
  getHeaderGroups,
  getRowModel,
  getState,
  previousPage,
  getCanPreviousPage,
  nextPage,
  getCanNextPage,
  getPageCount,
  Dropdown,
  empty,
  loading,
}) => {
  return (
    <>
      <div className="bg-white overflow-y-scroll flex flex-col justify-between rounded-lg drop-shadow-[20px_15px_35px_rgba(0,0,0,0.25)]">
        <div>
          <div className="text-white bg-gradient-to-r from-tm-purple to-tm-blue rounded-t-lg flex justify-between">
            {getHeaderGroups().map(({ headers, id }) => (
              <div key={id} className="flex items-center px-3 py-2 w-full">
                {headers.map(({ id, column, getContext }) => (
                  <div key={id} className={`flex items-center w-1/6`}>
                    {flexRender(column.columnDef.header, getContext())}
                    {column.getCanSort() && (
                      <FaArrowRightArrowLeft
                        className={`mx-2 rotate-90 hover:cursor-pointer text-hackathon-gray-200 ${
                          column.getIsSorted() && "hidden"
                        }`}
                        data-cy={`${column.id}-sorting`}
                        onClick={column.getToggleSortingHandler()}
                      />
                    )}
                    {column.getIsSorted() === "asc" && (
                      <FaSortAlphaDown
                        onClick={column.getToggleSortingHandler()}
                        data-cy={`${column.id}-sorting-desc`}
                        className="mx-2 hover:cursor-pointer text-white"
                      />
                    )}
                    {column.getIsSorted() === "desc" && (
                      <FaSortAlphaUp
                        onClick={column.getToggleSortingHandler()}
                        data-cy={`${column.columnDef.header}-sorting-asc`}
                        className="mx-2 hover:cursor-pointer text-white"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {getRowModel().rows.length === 0 && (
                  <p className="w-full text-center py-8 bg-white">{empty}</p>
                )}
                {getRowModel().rows.map(
                  ({ id, getVisibleCells, original, getIsSelected }) => (
                    <Body
                      getIsSelected={getIsSelected}
                      key={id}
                      getVisibleCells={getVisibleCells}
                      Dropdown={Dropdown}
                      original={original}
                    />
                  )
                )}
              </>
            )}
          </>
        </div>
        <div className="flex justify-end items-center p-4 text-lg bg-white w-full rounded-b-lg">
          <div className="mx-2">{getRowModel().rows.length} row(s)</div>
          <button
            onClick={() => previousPage()}
            disabled={!getCanPreviousPage()}
            className="mx-2 disabled:text-hackathon-gray-200"
          >
            <FaChevronLeft />
          </button>
          <div>
            Page {getState().pagination.pageIndex + 1} of {getPageCount()}
          </div>
          <button
            onClick={() => nextPage()}
            disabled={!getCanNextPage()}
            className="mx-2 disabled:text-hackathon-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
