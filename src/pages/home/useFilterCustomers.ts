import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  generateIndustryDropdown,
  filterCustomers,
  setCustomersList,
} from "./customerListSlice";
import getAllCustomersService from "../../service/getCustomers";
import deleteCustomerService from "../../service/deleteCustomer";

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
      const customers = await getAllCustomersService(query);
      setIndustry("");
      dispatch(generateIndustryDropdown(customers));
      dispatch(setCustomersList(customers));
    } catch (error: unknown) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [isCustomerActive, dispatch]);

  const deleteCustomerFromDb = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        await deleteCustomerService(id);
        fetchCustomers();
      } catch (error: unknown) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchCustomers]
  );

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers, isCustomerActive, deleteCustomerFromDb]);

  useEffect(() => {
    dispatch(filterCustomers(selectedIndustry));
  }, [selectedIndustry, dispatch]);

  return {
    isLoading,
    hasError,
    selectedCustomer,
    selectedIndustry,
    setCustomer,
    setIsCustomerActive,
    setIndustry,
    deleteCustomerFromDb,
  };
};

export default useFilterCustomers;
