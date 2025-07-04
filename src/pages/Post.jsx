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
            console.log(res.comments);
            setUserPost(res.post)
            setComments(res.comments);
            
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
        <div className="col-12 col-md-6 bg-light rounded shadow-sm p-4 mx-auto mt-4">
            <h5 className="fw-bold mb-3">{userPost.User?.username}</h5>

            <p className="text-center fs-5 mb-4">{userPost.content}</p>

            <p className="text-end text-secondary small mb-0">
                Creado el: {formatDate(userPost.createdAt)}
            </p>

            <form className="bg-dark border border-secondary border-2 p-3 mt-3 rounded">
                <textarea
                    className="form-control mb-3"
                    rows="3"
                    placeholder="Escribe tu comentario..."
                ></textarea>

                <div className="text-end">
                    <button className="btn btn-secondary">Comentar</button>
                </div>
            </form>
            
        </div>
        <div className='col-12 col-md-6 bg-light rounded shadow-sm p-4 mx-auto mt-4'>
            <div className="bg-secondary p-4 rounded mt-2">
                {comments.length === 0 ? <p className='text-center text-light fs-5'>No hay comentarios. Se el primero en comentar</p> : 
                    <p>Hay comentarios</p>
                }
        </div>
        </div>

    </div>
   </div>
  )
}

export default Post