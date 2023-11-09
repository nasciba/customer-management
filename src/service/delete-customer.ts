import axios from 'axios';

const deleteCustomer = async (id: string) => {
    const response = await axios.delete(`${process.env.PORT_SERVER}/customers/${id}`);
    return response.data;
}

export default deleteCustomer;