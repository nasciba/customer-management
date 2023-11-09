import { useEffect, useMemo, useState } from "react";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import Table from "../../components/table/table";
import Filter from "../../components/filter/filter";
import Box from "@mui/material/Box";
import generateDropdownOptions from "../../utils/generate-dropdown-options";
import { Button, CircularProgress, Grid } from "@mui/material";
import getAllCustomers from "../../service/get-customers";
import "./home.css";

const Home = () => {
  const activeCustomersDropdown = ["Active", "Inactive"];
  const [selectedIndustry, setIndustry] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(true);
  const [selectedCustomer, setCustomer] = useState<string>("Active");
  const [filteredList, setFilteredList] = useState<[] | CustomerDataDto[]>([]);
  const [customersList, setCustomersList] = useState<[] | CustomerDataDto[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleActiveCustomers = (value: string) => {
    if (value === "Inactive") {
      setIsActive(false);
      setCustomer(value);
    } else {
      setIsActive(true);
      setCustomer(value);
    }
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setIsLoading(true);
        const customers = await getAllCustomers();
        const activeCustomers = customers?.filter(
          (customer) => customer.isActive === isActive
        );
        setFilteredList(activeCustomers);
        setCustomersList(activeCustomers);
        setIsLoading(false);
      } catch (error: unknown) {
        setHasError(true);
      }
    };
    fetchCustomers();
  }, [isActive]);

  useEffect(() => {
    if (selectedIndustry === "") {
      setFilteredList(
        customersList.filter(
          (customer: CustomerDataDto) => customer.isActive === isActive
        )
      );
    } else {
      setFilteredList(
        customersList.filter(
          (customer) =>
            customer.isActive === isActive &&
            customer.industry === selectedIndustry
        )
      );
    }
  }, [selectedIndustry, customersList, isActive]);

  const industries = useMemo(() => {
    return generateDropdownOptions(customersList);
  }, [customersList]);

  if (hasError)
    return (
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h2>Something went wrong.</h2>
      </Box>
    );

  if (isLoading)
    return (
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Grid container className="padding">
      <Grid item xs={12}>
        <h1 className="title">Customers</h1>
      </Grid>
      <Grid item xs={12} md={3} display="flex" justifyContent="flex-start">
        <Filter
          selectOptions={activeCustomersDropdown}
          setOption={handleActiveCustomers}
          selectedOption={selectedCustomer}
          label="Customers"
          displayAllOptions={false}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Filter
          selectOptions={industries}
          setOption={setIndustry}
          selectedOption={selectedIndustry}
          label="Industry"
          displayAllOptions={true}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          className="home-button"
          href="/add-customer"
          variant="contained"
          color="primary"
        >
          Add Customer
        </Button>
      </Grid>
      <Grid xs={12} item className="table-margin">
        <Table customerData={filteredList} />
      </Grid>
    </Grid>
  );
};

export default Home;
