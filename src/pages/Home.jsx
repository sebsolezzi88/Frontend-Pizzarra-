import { useEffect, useState } from "react"
import { getAllPost } from "../api/post";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () =>{
      const response = await getAllPost();
      console.log(response.posts);
    }
    getPost();

  }, [])

  return (
    <>
        <h1>hoLA AL SISTIO</h1>
    </>
  )
}

export default Home