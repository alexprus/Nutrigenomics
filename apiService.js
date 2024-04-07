// apiService.js
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
