import { useSelector } from "react-redux";
import { addCustomer } from "../../store";
import { Box } from "@mui/material";
import Form from "../../components/form/form";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import "./add-customer.css"

const AddCustomerPage = () => {
  const newCustomerInfo: CustomerDataDto = useSelector((state: any) => {
    return state.customers;
  });

  const handleSubmit = () => {
    console.log(newCustomerInfo)
  }

  return (
    <Box className="padding" display="flex" flexDirection="column">
      <h1 className="title">Add Customer</h1>
      <Form customerInfo={newCustomerInfo} addCustomerReducer={addCustomer} handleSubmit={handleSubmit}/>
    </Box>
  );
};

export default AddCustomerPage;
