import { useSelector } from "react-redux";
import { addCustomer } from "../../store";
import { Box } from "@mui/material";
import Form from "../../components/form/form";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import "./edit-customer.css"

const EditCustomerPage = () => {
  const newCustomerInfo: CustomerDataDto = useSelector((state: any) => {
    return state.newCustomer;
  });

  const handleSubmit = () => {
    console.log(newCustomerInfo)
  }

  return (
    <Box className="padding" display="flex" flexDirection="column">
      <h1 className="title">Edit Customer</h1>
      <Form customerInfo={newCustomerInfo} addCustomerReducer={addCustomer} handleSubmit={handleSubmit}/>
    </Box>
  );
};

export default EditCustomerPage;
