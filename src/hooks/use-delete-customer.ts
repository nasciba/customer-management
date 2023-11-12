import { useState } from "react";
import deleteCustomer from "../service/delete-customer";
const useDeleteCustomer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const deleteCustomerFromDb = async (id: string) => {
    try {
      setIsLoading(true);
      await deleteCustomer(id);
      setIsLoading(false);
    } catch (error: unknown) {
      setHasError(true);
    }
  };
  return { deleteCustomerFromDb, hasError, isLoading };
};

export default useDeleteCustomer;
