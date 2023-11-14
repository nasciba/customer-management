import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { editCustomer } from "./editCustomerSlice";
import { Box, Typography } from "@mui/material";
import Form from "../../components/form/Form";
import ErrorScreen from "../../components/errorScreen/ErrorScreen";
import Loading from "../../components/loading/Loading";
import { CustomerDataDto } from "../../dtos/customer-data-dto";
import getCustomerById from "../../service/getCustomer";
import editCustomerService from "../../service/editCustomer";
import "./editCustomer.scss";

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
      navigate("/");
    } catch (error: unknown) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getCustomer = useCallback(
    async (id: string): Promise<void> => {
      try {
        setIsLoading(true);
        const customer = await getCustomerById(id);
        dispatch(editCustomer(customer));
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getCustomer(id);
  }, [id, getCustomer]);

  if (isLoading) return <Loading />;
  if (hasError) return <ErrorScreen />;
  return (
    <Box display="flex" flexDirection="column">
      <Typography className="edit-page-title" variant="h4">Edit Customer</Typography>
      <Form
        customerInfo={customerInfo}
        reducer={editCustomer}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
};

export default EditCustomerPage;
