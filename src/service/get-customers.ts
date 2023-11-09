import axios from "axios";
import { AxiosResponse } from "axios";
import { CustomerDataDto } from "../dtos/customer-data-dto";

const getAllCustomers = async (): Promise<AxiosResponse<CustomerDataDto[]>> => {
  const response = await axios.get(`${process.env.PORT_SERVER}/customers`);
  return response.data;
};

export default getAllCustomers;
