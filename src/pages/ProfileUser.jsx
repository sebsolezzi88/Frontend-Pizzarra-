import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostByUsername } from '../api/post';
import { searchUser } from '../api/follower';
import { formatDate } from '../utils/utils';


const ProfileUser = () => {

    const {username} = useParams();
    const [userPost, setUserPost] = useState([]);
    const navigate = useNavigate();

    if(!username){
        return navigate('/');
    }

    useEffect(() => {

      const handletEffect = async () =>{
        //Verificar si existe el usuario
            try {
              const res = await searchUser(username);
              if (res.status === 'success'){
                //Si el usuario existe obtenemos sus post
                const res = await getPostByUsername(username);
                console.log(res.posts)
                setUserPost(res.posts);
              }
            } catch (error) {
              navigate("/");
              console.log(error.response?.data || error.message);
            }
      }
      handletEffect();
      
    }, [])
    

    return (
        
        <div className="container">
            <div className="row mt-5">
                
                    <div className="col-10 col-sm-8 col-md-4 mx-auto mt-3">
                        <div className="bg-light rounded p-4 shadow-sm">
                            <h2 className="text-center mb-3">{username}</h2>
                            <div className="d-flex justify-content-around">
                                <span className='bi bi-people-fill'><strong> Seguidores:</strong> 15</span>
                                <span><i className="bi bi-person-check-fill"></i> Siguiendo: 6</span>
                            </div>
                                <button className='btn btn-success d-flex mx-auto mt-4'>Seguir</button>
                        </div>
                    </div>
                <div className="col-11 col-md-6 mx-auto bg-light mt-3 p-4 rounded">
                    <h5 className="text-center">
                     Ultimos Post
                    </h5>
                   {userPost.length === 0 ? (
                         <p className="text-center">No hay publicaciones.</p>
                       ) : (
                         userPost.map((post) => (
                     <div key={post.id} className="mb-3 p-3 border rounded bg-white shadow-sm">
                       <p className="mb-1">{post.content}</p>
                       <div className="d-flex justify-content-between align-items-center">
                         <small className="text-muted">
                           Publicado el {formatDate(post.createdAt)}
                         </small>
                         <div>
                           <span role="button" className="text-primary me-2" title="Ver comentarios">
                             <i className="bi bi-chat"></i>
                           </span>
                         </div>
                       </div>
                     </div>
                       ))
                         )}
                </div>

            </div>
        </div>
    )
}

export default ProfileUser