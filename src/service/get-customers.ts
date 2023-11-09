import axios from "axios";
import { AxiosResponse } from "axios";
import { CustomerDataDto } from "../dtos/customer-data-dto";

const getAllCustomers = async (): Promise<CustomerDataDto[]> => {
  const response = await axios.get(`${process.env.REACT_APP_PORT_SERVER}/customers`);
  return response.data;
};

export default getAllCustomers;
