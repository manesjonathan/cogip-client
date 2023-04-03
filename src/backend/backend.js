import axios from 'axios';

const URL = null; //'https://cogip.jonathan-manes.be';
export const getLatestInvoices = async () => {
    const response = await axios.get(`${URL}/get-latest-invoices`);
    return response.data['invoices'];
}
export const getCompanyById = async (id) => {
    const response = await axios.get(`${URL}/get-company/${id}`);
    return response.data;
}

export const getLatestContacts = async () => {
    const response = await axios.get(`${URL}/get-latest-contacts`);
    return response.data['contacts'];
}
export const getLatestCompanies = async () => {
    const response = await axios.get(`${URL}/get-latest-companies`);
    return response.data['companies'];
}
