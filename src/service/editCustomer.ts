import axios, { AxiosResponse } from "axios";
import { CustomerData } from "../types/customerData";

const editCustomerService = async (id: string, body: CustomerData) : Promise<AxiosResponse>=> {
    return axios.put(`${process.env.REACT_APP_PORT_SERVER}/customers/${id}`, body);
}

export default editCustomerService;