import axios from 'axios';

const URL = 'https://cogip.jonathan-manes.be';
export const getLatestInvoices = async () => {
    const response = await axios.get(`${URL}/get-latest-invoices`);
    return response.data['invoices'];
}
export const getCompanyById = async (id) => {
    const response = await axios.get(`${URL}/get-company/${id}`);
    return response.data['company'];
}

export const getLatestContacts = async () => {
    const response = await axios.get(`${URL}/get-latest-contacts`);
    return response.data['contacts'];
}
export const getLatestCompanies = async () => {
    const response = await axios.get(`${URL}/get-latest-companies`);
    return response.data['companies'];
}

export const getInvoices = async () => {
    const response = await axios.get(`${URL}/get-invoices`);
    return response.data['invoices'];
}

export const getContacts = async () => {
    const response = await axios.get(`${URL}/get-contacts`);
    return response.data['contacts'];
}

export const getCompanies = async () => {
    const response = await axios.get(`${URL}/get-companies`);
    return response.data['companies'];
}
export const getContactsByCompany = async (id) => {
    const response = await axios.get(`${URL}/get-contacts/company/${id}`);
    return response.data['contacts'];
}

export const getInvoicesByCompany = async (id) => {
    const response = await axios.get(`${URL}/get-invoices/company/${id}`);
    return response.data['invoices'];
}

export const getContactById = async (id) => {
    const response = await axios.get(`${URL}/get-contact/${id}`);
    console.log(response.data['contact']);
    return response.data['contact'];
}
