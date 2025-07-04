import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostAndComments, postComment } from '../api/post';
import { formatDate } from '../utils/utils';
import Alert from '../components/Alert';
import { useAuth } from '../context/authContext';



const Post = () => {
    const {idPost} = useParams(); //id del Post para buscar y comentar

    const [comments, setComments] = useState([]); //Estado de los comentarios
    const [userPost, setUserPost] = useState({}); //Estado del Usuario creador del post
    const [inputComment, setInputCommnet] = useState(''); //Estado del imput del form
    const [alert, setAlert] = useState({});
    const {logout} =useAuth();
    const navigate = useNavigate();
    
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

    const handletChange = (e) =>{
        setInputCommnet(e.target.value);
    }
    
    const handletSubmit = async (e) =>{
        
        try {
            e.preventDefault();
            if(inputComment.trim() === ''){
                setAlert({type:'danger',message:'Debe completa el campo'});
                return
            }
            //Guarda el comentario
            const response = await postComment(idPost,inputComment.trim());
            console.log(response);
            setComments([...comments,response.comment])
            
        } catch (error) {
            const msg = error.response?.data?.message;
            if (msg === 'token expired') {
                logout();
                navigate('/login');
            }
        }
        finally{
            setTimeout(() => {
            setAlert({})
            }, 2000);
        }
    }

    /* if (!userPost || !userPost.User) {
        return <p className="text-center mt-5">Cargando publicación...</p>;
    } */
    
  return (
   <div className="container">
    <div className="row mt-5 gap-1">
        <div className="col-12 col-md-6 bg-light rounded shadow-sm p-4 mx-auto mt-4">
            <h5 className="fw-bold mb-3">{userPost.User?.username}</h5>

            <p className="text-center fs-5 mb-4">{userPost.content}</p>

            <p className="text-end text-secondary small mb-0">
                Creado el: {formatDate(userPost.createdAt)}
            </p>
            {alert && <Alert type={alert.type} message={alert.message} />}
            <form onSubmit={handletSubmit} className="bg-dark border border-secondary border-2 p-3 mt-3 rounded">
                <textarea
                    className="form-control mb-3"
                    rows="3"
                    placeholder="Escribe tu comentario..."
                    onChange={handletChange}
                >{inputComment}</textarea>

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