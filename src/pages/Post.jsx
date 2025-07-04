import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostAndComments } from '../api/post';
import { formatDate } from '../utils/utils';


const Post = () => {
    const {idPost} = useParams(); //id del Post para buscar y comentar

    const [comments, setComments] = useState([]); //Estado de los comentarios
    const [userPost, setUserPost] = useState({}); //Estado del Usuario creador del post
    
    useEffect(() => {
      const handletGet = async () =>{
        try {
            const res = await getPostAndComments(idPost);
            console.log(res.post);
            setUserPost(res.post)
            
        } catch (error) {
            console.log(error);
        }
      }
      handletGet();
    }, [])

    /* if (!userPost || !userPost.User) {
        return <p className="text-center mt-5">Cargando publicación...</p>;
    } */
    
  return (
   <div className="container">
    <div className="row mt-5">
        <div className="col-12 col-md-6 bg-light rounded p-2">
            <h4 className='text-center'>{userPost.content}</h4>
            <p>Por: <span>{userPost.User?.username}</span> </p>
            <p>Creado el :  {formatDate(userPost.createdAt)} </p>
        </div>
        
    </div>
   </div>
  )
}

export default Post