import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCustomer } from "./addCustomerSlice";
import { Box, Typography } from "@mui/material";
import { CustomerData } from "../../types/customerData";
import addNewCustomer from "../../service/addNewCustomer";
import ErrorScreen from "../../components/errorScreen/ErrorScreen";
import Loading from "../../components/loading/Loading";
import Form from "../../components/form/Form";
import { StoreState } from "../../types/store";
import "./addCustomer.scss"

const AddCustomer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setHasError] = useState<boolean>(false);
  const customerData: CustomerData = useSelector((state: StoreState) => {
    return state.newCustomer;
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await addNewCustomer(customerData);
      navigate("/");
    }
    catch(error: unknown) {
      setHasError(true);
    }
    finally {
      setIsLoading(false);
    }
    
  }
  if(isLoading) return (<Loading/>)
  if(error) return (<ErrorScreen/>)
  return (
    <Box display="flex" flexDirection="column">
      <Typography className="add-customer-title" variant="h4">Add Customer</Typography>
      <Form customerData={customerData} reducer={addCustomer} handleSubmit={handleSubmit}/>
    </Box>
  );
};

export default AddCustomer;
