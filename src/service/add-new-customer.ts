import axios, { AxiosResponse } from 'axios';
import { CustomerDataDto } from '../dtos/customer-data-dto';

const addNewCustomer = async (customerData  : CustomerDataDto) : Promise<AxiosResponse>=> {
    return axios.post(`${process.env.PORT_SERVER}/customers`, { body: customerData });
}

export default addNewCustomer;