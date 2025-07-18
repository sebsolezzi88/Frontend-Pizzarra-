import axios from 'axios';

const API_URL = 'http://localhost:3000/api/user';

export const loginAPi = async (data) => {
  const res = await axios.post(`${API_URL}/login`, data);
  return res.data;
};

export const register = async (data) => {
  const res = await axios.post(`${API_URL}/register`, data);
  return res.data;
};

