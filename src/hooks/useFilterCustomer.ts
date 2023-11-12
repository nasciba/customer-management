import { useCallback, useEffect, useState } from "react";
import { CustomerDataDto } from "../dtos/customer-data-dto";
import getAllCustomers from "../service/get-customers";
import deleteCustomer from "../service/delete-customer";

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

  const buildQuery = useCallback((): string => {
    if (selectedIndustry === "") {
      return `isActive=${isCustomerActive}`;
    } else {
      return `isActive=${isCustomerActive}&industry=${selectedIndustry}`;
    }
  }, [selectedIndustry, isCustomerActive]);

  const filterCustomers = useCallback(async (query: string): Promise<void> => {

    try {
      setIsLoading(true);
      const customers = await getAllCustomers(query);
      setFilteredList(customers);
      setIsLoading(false);
    } catch (error: unknown) {
      setHasError(true);
    }
  }, [buildQuery]);

  const fetchCustomers = useCallback(async (): Promise<void> => {
    const query = `isActive=${isCustomerActive}`;

    try {
      setIsLoading(true);

      const customers = await getAllCustomers(query);
      setCustomersList(customers);
      setIsLoading(false);
    } catch (error: unknown) {
      setHasError(true);
    }
  }, [isCustomerActive]);

  const deleteCustomerFromDb = useCallback(async (id: string) => {
    const query = `isActive=${isCustomerActive}`;

    try {
      setIsLoading(true);
      await deleteCustomer(id);
      filterCustomers(query)
      setIsLoading(false);
    } catch (error: unknown) {
      setHasError(true);
    }
  }, [filterCustomers]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers, isCustomerActive, deleteCustomerFromDb]);


  useEffect(() => {
    const query = buildQuery();
    filterCustomers(query);
  }, [selectedIndustry, isCustomerActive, filterCustomers, buildQuery, deleteCustomerFromDb]);



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
    deleteCustomerFromDb,
  };
};

export default useFilterCustomers;
