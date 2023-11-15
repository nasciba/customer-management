import { useCallback, useMemo, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Grid, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import Loading from "../../components/loading/Loading";
import ErrorScreen from "../../components/errorScreen/ErrorScreen";
import Filter from "../../components/filter/filter";
import generateDropdownOptions from "../../utils/generateDropdownOptions";
import useFilterCustomers from "./useFilterCustomer";
import { useSelector } from "react-redux";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import { Link } from "react-router-dom";
import Dialog from "../../components/dialog/dialog";
import "./home.scss";

const Home = () => {
  const tableColumns: GridColDef[] = [
    {
      align: "center",
      field: "company",
      headerAlign: "center",
      headerName: "Company",
      headerClassName: "home-table-header",
      flex: 0.15,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <div className="home-about-text">{params.value}</div>
        </Tooltip>
      ),
    },
    {
      align: "center",
      disableColumnMenu: true,
      field: "industry",
      flex: 0.2,
      headerAlign: "center",
      headerClassName: "home-table-header",
      headerName: "Industry",
      valueFormatter: (params) =>
        params.value?.charAt(0).toUpperCase() + params.value.slice(1),
    },
    {
      align: "center",
      disableColumnMenu: true,
      field: "projects",
      flex: 0.05,
      headerClassName: "home-table-header",
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
      flex: 0.2,
      field: "about",
      headerClassName: "home-table-header",
      headerName: "About",
      headerAlign: "center",
      minWidth: 400,
      renderCell: (params) => (
        <Tooltip title={params.value}>
          <div className="home-about-text">{params.value}</div>
        </Tooltip>
      ),
      sortable: false,
      type: "number",
    },
    {
      align: "center",
      disableColumnMenu: true,
      field: "actions",
      headerClassName: "home-table-header",
      headerName: "Actions",
      flex: 0.05,
      headerAlign: "center",
      sortable: false,
      renderCell: (params) =>
        params.row.isActive ? (
          <Link to={`/edit-customer/${params.row.id}`} aria-label="edit">
            <Edit color="secondary" />
          </Link>
        ) : (
          <IconButton
            aria-label="delete"
            onClick={() => {
              setOpenDialog(true);
              setCustomerToDelete(params.row.id);
            }}
          >
            <Delete color="secondary"/>
          </IconButton>
        ),
    },
  ];

  
  const filteredList: CustomerDataDto[] = useSelector((state: any) => {
    return state.customers.filteredList;
  });

  const customerList: CustomerDataDto[] = useSelector((state: any) => {
    return state.customers.customersList;
  });

  const {
    isLoading,
    hasError,
    selectedCustomer,
    selectedIndustry,
    setCustomer,
    setIndustry,
    setIsCustomerActive,
    deleteCustomerFromDb,
  } = useFilterCustomers();

  const activeCustomersDropdown = ["Active", "Inactive"];

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [customerToDelete, setCustomerToDelete] = useState<string>("");

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const handleDeleteCustomer = useCallback(async () => {
    await deleteCustomerFromDb(customerToDelete);
    setOpenDialog(false);
  }, [deleteCustomerFromDb, customerToDelete]);

  const handleSelectCustomer = useCallback((value: string) => {
    setCustomer(value);
    if (value === "Inactive") {
      setIsCustomerActive(false);
    } else {
      setIsCustomerActive(true);
    }
  }, [setCustomer, setIsCustomerActive]);


  const industriesDropdown = useMemo(() => {
    return generateDropdownOptions(customerList);
  }, [customerList]);

  if (hasError) return <ErrorScreen />;

  if (isLoading) return <Loading />;

  return (
    <Grid container className="home-container">
      <Dialog
        open={openDialog}
        text="Are you sure you want to delete this customer?"
        title="Delete Customer"
        customerToDelete={customerToDelete}
        handleClose={handleCloseDialog}
        handleSubmit={handleDeleteCustomer}
      />
      <Grid
        container
        className="home-filter-container"
        alignItems="center"
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        <Filter
          selectOptions={activeCustomersDropdown}
          handleChange={handleSelectCustomer}
          selectedOption={selectedCustomer}
          label="Customers"
          displayAllOptions={false}
        />
        <Filter
          selectOptions={industriesDropdown}
          handleChange={setIndustry}
          selectedOption={selectedIndustry}
          label="Industry"
          displayAllOptions={true}
        />
        <Button
          color="secondary"
          className="home-button"
          href="/add-customer"
          variant="contained"
        >
          Add Customer
        </Button>
      </Grid>

      <Grid xs={12} item>
        <DataGrid
          columns={tableColumns}
          className="home-table"
          rows={filteredList}
          columnBuffer={tableColumns.length}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 20 } },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
