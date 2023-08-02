import axios from 'axios';

const URL = process.env.API_URL;
const HTTP_STATUS_OK = 200;

const loginRequest = async (email, password) => {
  try {
    const response = await axios.post(`${URL}/login`, {
      email,
      password,
    });

    const { status, data } = response;

    if (status === HTTP_STATUS_OK) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('tokenGenerationTime', Date.now());
      localStorage.setItem('startup', JSON.stringify(data.startup));

      return data.startup;
    }

    return null;
  } catch (error) {
    return false;
  }
};

const apiRequest = async (method, endpoint, data = null) => {
  try {
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let response;
    console.log(config);

    switch (method.toLowerCase()) {
    case 'get':
      response = await axios.get(`${URL}${endpoint}`, config);
      break;
    case 'post':
      response = await axios.post(`${URL}${endpoint}`, data, config);
      break;
    case 'put':
      response = await axios.put(`${URL}${endpoint}`, data, config);
      break;
    case 'delete':
      response = await axios.delete(`${URL}${endpoint}`, config);
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

export {
  loginRequest,
  apiRequest,
};
