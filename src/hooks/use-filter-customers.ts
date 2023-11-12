import { useEffect, useState } from "react";
import { CustomerDataDto } from "../dtos/customer-data-dto";
import getAllCustomers from "../service/get-customers";

const useFilterCustomers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isCustomerActive, setIsCustomerActive] = useState<boolean>(true);
  const [selectedCustomer, setCustomer] = useState<string>("Active");
  const [selectedIndustry, setIndustry] = useState<string>("");
  const [customersList, setCustomersList] = useState<[] | CustomerDataDto[]>(
    []
  );
  const [filteredList, setFilteredList] = useState<[] | CustomerDataDto[]>([]);
  
  const buildQuery = (): string => {
    if(selectedIndustry === "") {
      return `isActive=${isCustomerActive}`;
    }
    else {
      return `isActive=${isCustomerActive}&industry=${selectedIndustry}`
    }
  }

  const filterCustomers = async (): Promise<void> => {
    const query = buildQuery();

    try {
      setIsLoading(true);
      const customers = await getAllCustomers(query);
      setFilteredList(customers);
      setIsLoading(false);
    } catch (error: unknown) {
      setHasError(true);
    }
  };

  const fetchCustomers = async (): Promise<void> => {
    const query = `isActive=${isCustomerActive}`;

    try {
      setIsLoading(true);
      const customers = await getAllCustomers(query);
      setCustomersList(customers);
      setIsLoading(false);
    } catch (error: unknown) {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [isCustomerActive]);

  useEffect(() => {
    filterCustomers();
  }, [selectedIndustry, isCustomerActive]);

  useEffect(() => {
    if (selectedIndustry === "") {
      setFilteredList(customersList);
    }
  }, [selectedIndustry, customersList]);

  useEffect(() => {
    if (selectedCustomer === "Inactive") {
      setIsCustomerActive(false);
    } else {
      setIsCustomerActive(true);
    }
  }, [selectedCustomer, isCustomerActive, customersList]);

  return {
    customersList,
    filteredList,
    hasError,
    isCustomerActive,
    isLoading,
    selectedIndustry,
    selectedCustomer,
    setCustomer,
    setIndustry,
    setFilteredList,
    setIsCustomerActive,
  };
};

export default useFilterCustomers;
