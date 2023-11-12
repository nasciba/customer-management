import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editCustomer } from "./editCustomerSlice";
import { Box } from "@mui/material";
import Form from "../../components/form/form";
import ErrorScreen from "../../components/errorScreen/ErrorScreen";
import Loading from "../../components/loading/Loading";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import getCustomerById from "../../service/get-customer";
import editCustomerService from "../../service/edit-customer";
import "./editCustomer.css";

const EditCustomerPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customerInfo: CustomerDataDto = useSelector((state: any) => {
    return state.editCustomer;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const { id } = useParams() as { id: string };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await editCustomerService(id, customerInfo);
      setIsLoading(false);
      navigate("/");
    } catch (error: unknown) {
      setHasError(true);
    }
  };

  const getCustomer = async (id: string): Promise<void> => {
    try {
      setIsLoading(true);
      const customer = await getCustomerById(id);
      dispatch(editCustomer(customer));
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    getCustomer(id);
  }, []);

  if (isLoading) return <Loading />;
  if (hasError) return <ErrorScreen />;
  return (
    <Box className="padding" display="flex" flexDirection="column">
      <h1 className="title">Edit Customer</h1>
      <Form
        customerInfo={customerInfo}
        reducer={editCustomer}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default EditCustomerPage;
