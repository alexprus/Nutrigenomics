// This API service file contains the function to fetch data from the FDC API using Axios.
// The fetchFoods function takes a query parameter and returns the response data from the API.
// The API key is stored in a constant named API_KEY, and the
// base URL for the API is stored in a constant named API_BASE_URL.
// We would use this in the future as a more dynamic way to fetch data from the API.

import axios from 'axios';

const API_KEY = QwXAS5VATQMIxZyZdxkgtjodWbVfw8VK0YjbkBx4; // Replace 'YOUR_API_KEY' with your actual API key
const API_BASE_URL = 'https://api.nal.usda.gov/fdc/v1/';

// Function to fetch data from the FDC API
export const fetchFoods = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/foods/search?api_key=${API_KEY}&query=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching foods:', error);
    throw error;
  }
};
