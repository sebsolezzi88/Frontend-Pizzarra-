import axios from 'axios';

const API_URL = 'http://localhost:3000/api/follower';

export const searchUser = async (useraname) => {
  const res = await axios.get(`${API_URL}/username/${useraname}`);
  return res.data;
};


