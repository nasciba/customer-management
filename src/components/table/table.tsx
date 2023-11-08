import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { CustomerDataDto } from "../../dtos/customer-data-dto";

const columns: GridColDef[] = [
  { field: "company", headerName: "Company", minWidth: 250 },
  {
    align: "center",
    disableColumnMenu: true,
    field: "industry",
    headerAlign: "center",
    headerName: "Industry",
    minWidth: 250,
    valueFormatter: (params) =>
      params.value.charAt(0).toUpperCase() + params.value.slice(1),
  },
  {
    align: "center",
    disableColumnMenu: true,
    field: "projects",
    headerName: "Projects",
    headerAlign: "center",
    minWidth: 200,
    renderCell(params) {
      return <div>{params.value.length}</div>;
    },
    sortable: false,
    type: "number",
  },
  {
    align: "center",
    disableColumnMenu: true,
    field: "actions",
    headerName: "Actions",
    minWidth: 250,
    headerAlign: "center",
    sortable: false,
    renderCell: (params) => (
      <IconButton>
        <EditIcon />
      </IconButton>
    ),
  },
];

interface TableProps {
  customerData: CustomerDataDto[];
}

const Table = ({ customerData }: TableProps) => {
  if (!customerData.length) return <>No customers were found.</>;
  return (
    <>
      <DataGrid
        columns={columns}
        rows={customerData}
        columnBuffer={columns.length}
      />
    </>
  );
};

export default Table;
