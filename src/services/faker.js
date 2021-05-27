import axios from 'axios';

const fakerUrl = process.env.REACT_APP_FAKER_API;

axios.defaults.baseURL = fakerUrl;

export const getFakerBooks = async ({ quantity = 3 }) => {
  try {
    const response = await axios.get(`/books?_quantity=${quantity}`);
    return response.data.data;
  } catch (error) {
    console.trace(error);
    return [];
  }
};

export const getFakerCompanies = async (quantity) => {
  try {
    const response = await axios.get(`/companies?_quantity=${quantity}`);
    return response.data.data;
  } catch (error) {
    console.trace(error);
    return [];
  }
};
