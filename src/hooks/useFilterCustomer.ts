import { useCallback, useEffect, useState } from "react";
import getAllCustomers from "../service/get-customers";
import deleteCustomer from "../service/delete-customer";
import { filterCustomers, setCustomersList } from "../pages/home/customerListSlice";
import { useDispatch } from "react-redux";

const useFilterCustomers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isCustomerActive, setIsCustomerActive] = useState<boolean>(true);
  const [selectedCustomer, setCustomer] = useState<string>("Active");
  const [selectedIndustry, setIndustry] = useState<string>("");
  
  const dispatch = useDispatch();

  const fetchCustomers = useCallback(async (): Promise<void> => {
    const query = `isActive=${isCustomerActive}`;

    try {
      setIsLoading(true);
      const customers = await getAllCustomers(query);
      setIndustry("");
      dispatch(setCustomersList(customers));
      setIsLoading(false);
    } catch (error: unknown) {
      setHasError(true);
    }
  }, [isCustomerActive, dispatch]);

  const deleteCustomerFromDb = useCallback(async (id: string) => {

    try {
      setIsLoading(true);
      await deleteCustomer(id);
      fetchCustomers();
      setIsLoading(false);
    } catch (error: unknown) {
      setHasError(true);
    }
  }, [fetchCustomers]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers, isCustomerActive, deleteCustomerFromDb]);


  useEffect(() => {
    dispatch(filterCustomers(selectedIndustry));
  }, [selectedIndustry, dispatch]);

  useEffect(() => {
    if (selectedCustomer === "Inactive") {
      setIsCustomerActive(false);
    } else {
      setIsCustomerActive(true);
    }
  }, [selectedCustomer, isCustomerActive]);

  return {
    isLoading,
    hasError,
    selectedCustomer,
    selectedIndustry,
    setCustomer,
    setIndustry,
    deleteCustomerFromDb,
  };
};

export default useFilterCustomers;
