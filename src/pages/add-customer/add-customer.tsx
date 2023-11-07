import { useSelector } from "react-redux";
import { addCustomer } from "../../store";
import { Box } from "@mui/material";
import Form from "../../components/form/form";
import { CustomerDataDto } from "../../dtos/customer-data-dto";

const AddCustomerPage = () => {
  const newCustomerInfo: CustomerDataDto = useSelector((state: any) => {
    return state.customers;
  });


  return (
    <Box display="flex" flexDirection="column">
      <h1>Add Customer</h1>
      <Form customerInfo={newCustomerInfo} addCustomerReducer={addCustomer} />
    </Box>
  );
};

export default AddCustomerPage;
