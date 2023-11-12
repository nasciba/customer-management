import axios, { AxiosResponse } from 'axios';
import { CustomerDataDto } from '../dtos/customer-data-dto';

const addNewCustomer = async (customerData  : CustomerDataDto) : Promise<AxiosResponse>=> {
    return axios.post(`${process.env.REACT_APP_PORT_SERVER}/customers`, customerData );
}

export default addNewCustomer;