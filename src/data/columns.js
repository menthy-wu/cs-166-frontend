const generateSelect = () => ({
  id: "select",
  width: "w-1/12",
  header: ({ table }) => (
    <></>
    // <Checkbox
    //   toggle={table.getIsAllRowsSelected()}
    //   onClick={table.getToggleAllRowsSelectedHandler()}
    // />
  ),
  cell: ({ row }) => (
    <></>
    // <Checkbox
    //   toggle={row.getIsSelected()}
    //   onClick={row.getToggleSelectedHandler()}
    // />
  ),
});

export const COLUMNS = {
  store: [
    generateSelect(),
    {
      accessorKey: "storeID",
      header: "storeID",
      width: "w-3/12",
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "name",
      header: "name",
      width: "w-3/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "latitude",
      header: "latitude",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "longitude",
      header: "longitude",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "manager",
      header: "manager",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
    {
      accessorKey: "dateEstablished",
      header: "dateEstablished",
      width: "w-1/12",
      cell: ({ getValue }) => <div>{getValue()}</div>,
    },
  ],
};