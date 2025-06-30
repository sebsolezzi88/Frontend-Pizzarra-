import axios from 'axios';
const API_URL = 'http://localhost:3000/api/post';

export const getPostByUsername = async (username) => {
  const res = await axios.get(`${API_URL}/user/username/${username}`);
  return res.data;
};

export const AddPost = async (content) => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.post(API_URL, {content}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return res.data; // o lo que tu backend devuelva
  } catch (error) {
    console.error("Error al crear el post:", error);
    throw error; // para manejar el error en el componente
  }
};