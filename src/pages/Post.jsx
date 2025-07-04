import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostAndComments } from '../api/post';


const Post = () => {
    const {idPost} = useParams();
    
    useEffect(() => {
      const handletGet = async () =>{
        try {
            const res = await getPostAndComments(idPost);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
      }
      handletGet();
    }, [])
    
  return (
   <h3>{idPost} </h3>
  )
}

export default Post