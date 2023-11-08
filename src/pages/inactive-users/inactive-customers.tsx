import { useEffect, useMemo, useState } from "react";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import customers from "../../customers.json";
import Table from "../../components/table/table";
import Filter from "../../components/filter/filter";
import generateDropdownOptions from "../../utils/generate-dropdown-options";
import { Button, Grid } from "@mui/material";
import "./inactive-customers.css";

const InactiveCustomersPage = () => {
  const [inactiveCustomers, setInactiveCustomers] = useState<
    [] | CustomerDataDto[]
  >([]);
  const [selectedOption, setOption] = useState<string>("");

  useEffect(() => {
    setInactiveCustomers(customers.filter((customer) => !customer.isActive));
  }, []);

  useEffect(() => {
    if (selectedOption === "") {
      setInactiveCustomers(customers.filter((customer) => !customer.isActive));
    } else {
      setInactiveCustomers(
        customers.filter(
          (customer) =>
            !customer.isActive && customer.industry === selectedOption
        )
      );
    }
  }, [selectedOption]);

  const industries = useMemo(() => {
    return generateDropdownOptions(customers);
  }, []);

  return (
    <Grid container className="padding">
      <Grid item xs={12}>
        <h1 className="title">Inactive Customers</h1>
      </Grid>
      <Grid item xs={12} md={3} display="flex" justifyContent="flex-start">
        <Filter
          selectOptions={industries}
          setOption={setOption}
          selectedOption={selectedOption}
        />
      </Grid>

      <Grid xs={12} item className="table-margin">
        <Table customerData={inactiveCustomers} />
      </Grid>
    </Grid>
  );
};

export default InactiveCustomersPage;
