import axios, { AxiosResponse } from 'axios';
import { CustomerDataDto } from '../dtos/customer-data-dto';

const getCustomerById = async (id: string) : Promise<AxiosResponse<CustomerDataDto>>=> {
    const response = await axios.get(`${process.env.PORT_SERVER}/customers/${id}`);
    return response.data;
}

export default getCustomerById;