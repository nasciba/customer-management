import axios from "axios";
import { CustomerData } from "../types/customerData";

const getAllCustomersService = async (query?: string): Promise<CustomerData[]> => {
  const response = await axios.get(`${process.env.REACT_APP_PORT_SERVER}/customers${query ? `?${query}` : ""}`);
  return response.data;
};

export default getAllCustomersService;
