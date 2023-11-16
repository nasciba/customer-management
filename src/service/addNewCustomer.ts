import axios, { AxiosResponse } from "axios";
import { CustomerData } from "../types/customerData";

const addNewCustomerService = async (customerData  : CustomerData) : Promise<AxiosResponse>=> {
    return axios.post(`${process.env.REACT_APP_PORT_SERVER}/customers`, customerData );
}

export default addNewCustomerService;