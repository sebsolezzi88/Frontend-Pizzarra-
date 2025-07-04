import React from 'react'
import { useParams } from 'react-router-dom'


const Post = () => {
    const {idPost} = useParams();
  return (
   <h3>{idPost} </h3>
  )
}

export default Post