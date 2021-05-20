import axios from 'axios';

const fakerUrl = process.env.REACT_APP_FAKER_API;

export const getFakerBooks = async ({ quantity = 3 }) => {
  try {
    const response = await axios.get(`${fakerUrl}/books?_quantity=${quantity}`);
    return response.data.data;
  } catch (error) {
    console.trace(error);
    return [];
  }
};

const exporting = {
  getFakerBooks,
};
export default exporting;
