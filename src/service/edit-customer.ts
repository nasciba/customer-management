import axios, { AxiosResponse } from 'axios';
import { CustomerDataDto } from '../dtos/customer-data-dto';

const editCustomer = async (id: string, body: CustomerDataDto) : Promise<AxiosResponse>=> {
    return axios.put(`${process.env.REACT_APP_PORT_SERVER}/customers/${id}`, { body: body });
}

export default editCustomer;