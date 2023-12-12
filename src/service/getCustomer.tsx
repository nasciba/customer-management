import axios from "axios";
import { CustomerData } from "../types/customerData";

const getCustomerByIdService = async (id: string) : Promise<CustomerData>=> {
    const response = await axios.get(`${process.env.REACT_APP_PORT_SERVER}/customers/${id}`);
    return response.data;
}

export default getCustomerByIdService;