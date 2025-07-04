import axios from 'axios';
const API_URL = 'http://localhost:3000/api/post';
const API_URL_COMMENTS = 'http://localhost:3000/api/comment';


export const getAllPost = async () =>{
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error al crear el post:", error);
    throw error; 
  }
}

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
    return res.data; 
  } catch (error) {
    console.error("Error al crear el post:", error);
    throw error; 
  }
};

export const updatePost = async (editando,content) => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.put(API_URL +`/${editando}`, {content}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return res.data; 
  } catch (error) {
    console.error("Error al crear el post:", error);
    throw error; 
  }
};

export const deletePost = async (postId) =>{
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(API_URL+`/${postId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return res.data; 
  } catch (error) {
    console.error("Error al crear el post:", error);
    throw error; // para manejar el error en el componente
  }
}

export const getPostAndComments = async(postId) =>{
  const res = await axios.get(`${API_URL_COMMENTS}/post/${postId}`);
  return res.data;
}