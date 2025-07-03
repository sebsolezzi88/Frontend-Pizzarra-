import axios from 'axios';

const API_URL = 'http://localhost:3000/api/follower';

export const searchUser = async (username) => {
  const res = await axios.get(`${API_URL}/username/${username}`);
  return res.data;
};

export const getFollowers = async (username) => {
  const res = await axios.get(`${API_URL}/username/${username}/followers`);
  return res.data;
};

export const getFollowings = async (username) => {
  const res = await axios.get(`${API_URL}/username/${username}/followings`);
  return res.data;
};
