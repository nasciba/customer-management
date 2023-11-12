import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCustomer } from "./addCustomerSlice";
import { Box } from "@mui/material";
import Form from "../../components/form/form";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import addNewCustomer from "../../service/add-new-customer";
import ErrorScreen from "../../components/errorScreen/ErrorScreen";
import Loading from "../../components/loading/Loading";
import "./addCustomer.css"

const AddCustomerPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setHasError] = useState<boolean>(false);
  const newCustomerInfo: CustomerDataDto = useSelector((state: any) => {
    return state.newCustomer;
  });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await addNewCustomer(newCustomerInfo);
      setIsLoading(false);
      navigate("/");
    }
    catch(error: unknown) {
      setHasError(true);
    }
    
  }
  if(isLoading) return (<Loading/>)
  if(error) return (<ErrorScreen/>)
  return (
    <Box className="padding" display="flex" flexDirection="column">
      <h1 className="title">Add Customer</h1>
      <Form customerInfo={newCustomerInfo} reducer={addCustomer} handleSubmit={handleSubmit}/>
    </Box>
  );
};

export default AddCustomerPage;
