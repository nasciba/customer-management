import { useMemo } from "react";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Grid, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import Loading from "../../components/loading/Loading";
import ErrorScreen from "../../components/errorScreen/ErrorScreen";
import Filter from "../../components/filter/filter";
import generateDropdownOptions from "../../utils/generateDropdownOptions";
import useFilterCustomers from "../../hooks/useFilterCustomer";
import { useSelector } from "react-redux";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import "./home.css";

const Home = () => {
  const tableColumns: GridColDef[] = [
    { field: "company", headerName: "Company", minWidth: 250 },
    {
      align: "center",
      disableColumnMenu: true,
      field: "industry",
      headerAlign: "center",
      headerName: "Industry",
      minWidth: 250,
      valueFormatter: (params) =>
        params.value?.charAt(0).toUpperCase() + params.value.slice(1),
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
      field: "about",
      headerName: "About",
      headerAlign: "center",
      minWidth: 400,
      sortable: false,
      type: "number",
    },
    {
      align: "center",
      disableColumnMenu: true,
      field: "actions",
      headerName: "Actions",
      minWidth: 150,
      headerAlign: "center",
      sortable: false,
      renderCell: (params) =>
        params.row.isActive ? (
          <Link to={`/edit-customer/${params.row.id}`} aria-label="edit">
            <Edit />
          </Link>
        ) : (
          <IconButton aria-label="delete"
            onClick={() => {
              deleteCustomerFromDb(params.row.id);
            }}
          >
            <Delete />
          </IconButton>
        ),
    },
  ];

  const filteredList: CustomerDataDto[] = useSelector((state: any) => {
    return state.customers.filteredList;
  });

  const customerList: CustomerDataDto[] = useSelector((state: any) => {
    return state.customers.customersList;
  })


  const {
    isLoading,
    hasError,
    selectedCustomer,
    selectedIndustry,
    setCustomer,
    setIndustry,
    deleteCustomerFromDb,
  } = useFilterCustomers();

  const activeCustomersDropdown = ["Active", "Inactive"];
  
  const industriesDropdown = useMemo(() => {
    return generateDropdownOptions(customerList);
  }, [customerList]);


  if (hasError) return <ErrorScreen />;

  if (isLoading) return <Loading />;

  return (
    <Grid container className="home-container">
      <Grid item xs={12}>
        <h1 className="home-title">Customers</h1>
      </Grid>
      <Grid container className="home-filter-container">
        <Grid
          item
          xs={12}
          lg={5}
          display="flex"
          justifyContent="flex-start"
          flexWrap="wrap"
        >
          <Filter
            selectOptions={activeCustomersDropdown}
            handleChange={setCustomer}
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
        </Grid>
        <Grid item xs={12} lg={7}>
          <Button
            className="home-button"
            href="/add-customer"
            variant="contained"
            color="primary"
          >
            Add Customer
          </Button>
        </Grid>
      </Grid>

      <Grid xs={12} item className="home-table-margin">
        <DataGrid
          columns={tableColumns}
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
