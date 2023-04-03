import axios from 'axios';
import {data} from "autoprefixer";

const URL = 'https://cogip.jonathan-manes.be';
export const getLatestInvoices = async () => {
    const response = await axios.get(`${URL}/get-latest-invoices`);
    return response.data['invoices'];
}
export const getCompanyById = async (id) => {
    const response = await axios.get(`${URL}/get-company/${id}`);
    return response.data;
}
