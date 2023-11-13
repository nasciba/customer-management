import axios from "axios";
import { CustomerDataDto } from "../dtos/customer-data-dto";

const getAllCustomersService = async (query?: string): Promise<CustomerDataDto[]> => {
  const response = await axios.get(`${process.env.REACT_APP_PORT_SERVER}/customers${query ? `?${query}` : ""}`);
  return response.data;
};

export default getAllCustomersService;
