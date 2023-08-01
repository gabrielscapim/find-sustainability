import axios from 'axios';

const URL = 'http://localhost:3003';

const apiRequest = async (method, endpoint, data = null) => {
  try {
    let response;

    switch (method.toLowerCase()) {
    case 'get':
      response = await axios.get(`${URL}${endpoint}`);
      break;
    case 'post':
      response = await axios.post(`${URL}${endpoint}`, data);
      break;
    case 'put':
      response = await axios.put(`${URL}${endpoint}`, data);
      break;
    case 'delete':
      response = await axios.delete(`${URL}${endpoint}`);
      break;
    default:
      throw new Error(`Invalid HTTP method: ${method}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default apiRequest;
