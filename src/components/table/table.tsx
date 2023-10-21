import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { CustomerDataDto } from "../../dtos/customer-data-dto";

const columns: GridColDef[] = [
  { field: "company", headerName: "Company", width: 200 },
  { field: "industry", headerName: "Industry", width: 200 },
  { field: "projects", headerName: "Projects", width: 200, renderCell(params) {
    return (
      <div>
        {params.value.length}
      </div>
    );
  }, },
  {
    field: "delete",
    headerName: "Delete",
    width: 200,
    renderCell: () => <button>Delete</button>,
  },
];

interface TableProps {
  customerData: CustomerDataDto[];
}

const Table = ({ customerData }: TableProps) => {
  if (!customerData.length) return <>No customers were found.</>;
  return (
    <>
      <DataGrid columns={columns} rows={customerData} />
    </>
  );
};

export default Table;
