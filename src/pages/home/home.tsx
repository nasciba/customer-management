import { useEffect, useState } from "react";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import customers from "../../customers.json";
import Table from "../../components/table/table";

const Home = () => {
  const [activeCustomers, setActiveCustomers] = useState<[]|CustomerDataDto[]>([]);

  useEffect(() => {
    const activeCustomers = customers.filter((customer) => customer.isActive);
    setActiveCustomers(activeCustomers);
  }, []);

  return (
    <div>
      <h1>Active Customers</h1>
     <Table customerData={activeCustomers}/>
    </div>
  );
};

export default Home;
