import { useEffect, useState } from "react"
import { getAllPost } from "../api/post";
import CardPost from "../components/CardPost";

const Home = () => {
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    const getPost = async () =>{
      const response = await getAllPost();
      setPosts(response.posts);
    }
    getPost();

  }, [])

  return (
    <>
        <div className="container mt-4">
          <h1 className="text-light">Ultimos Post</h1>

          <div className="row">
            
           {posts.map(post => <CardPost post={post}/>)}
                
            
          </div>
        </div>
    </>
  )
}

export default Home