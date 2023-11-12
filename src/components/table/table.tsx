// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import EditIcon from "@mui/icons-material/Edit";
// import Delete from "@mui/icons-material/Delete";
// import { IconButton } from "@mui/material";
import { CustomerDataDto } from "../../dtos/customer-data-dto";



interface TableProps {
  customerData: CustomerDataDto[];
}

const Table = ({ customerData }: TableProps) => {
  return (
    <>
      {/* <DataGrid
        columns={columns}
        rows={customerData}
        columnBuffer={columns.length}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
      /> */}
    </>
  );
};

export default Table;
