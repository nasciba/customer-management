import { useEffect, useMemo, useState } from "react";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import customers from "../../customers.json";
import Table from "../../components/table/table";
import Filter from "../../components/filter/filter";

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
    return customers
      .filter(
        (customer, index, customerList) =>
          index ===
          customerList.findIndex(
            (item) =>
              item.industry === customer.industry 
          )
      )
      .map((customer) => customer.industry);
  }, []);

  return (
    <div>
      <h1>Active Customers</h1>
      <Filter
        selectOptions={industries}
        setOption={setOption}
        selectedOption={selectedOption}
      />
      <Table customerData={activeCustomers} />
    </div>
  );
};

export default Home;
