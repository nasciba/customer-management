import { useEffect, useMemo, useState } from "react";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import customers from "../../customers.json";
import Table from "../../components/table/table";
import Filter from "../../components/filter/filter";
import generateDropdownOptions from "../../utils/generate-dropdown-options";
import { Box, Button } from "@mui/material";

const Home = () => {
  const [activeCustomers, setActiveCustomers] = useState<
    [] | CustomerDataDto[]
  >([]);
  const [selectedOption, setOption] = useState<string>("");

  useEffect(() => {
    setActiveCustomers(customers.filter((customer) => customer.isActive));
  }, []);

  useEffect(() => {
    if (selectedOption === "") {
      setActiveCustomers(customers.filter((customer) => customer.isActive));
    } else {
      setActiveCustomers(
        customers.filter(
          (customer) =>
            customer.isActive && customer.industry === selectedOption
        )
      );
    }
  }, [selectedOption]);

  const industries = useMemo(() => {
    return generateDropdownOptions(customers)
  }, []);

  return (
    <div>
      <h1>Active Customers</h1>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}> 
      <Filter
        selectOptions={industries}
        setOption={setOption}
        selectedOption={selectedOption}
      />
      <Button href='/add-customer' variant="contained" color="primary">Add Customer</Button>
      </Box>
     
      <Table customerData={activeCustomers} />
    </div>
  );
};

export default Home;
