import axios from "axios";
import { CustomerDataDto } from "../dtos/customer-data-dto";

const getCustomerByIdService = async (id: string) : Promise<CustomerDataDto>=> {
    const response = await axios.get(`${process.env.REACT_APP_PORT_SERVER}/customers/${id}`);
    return response.data;
}

export default getCustomerByIdService;