import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostByUsername } from '../api/post';
import { followUser, getFollowers, getFollowings, searchUser, unfollowUser } from '../api/follower';
import { formatDate } from '../utils/utils';
import { useAuth } from '../context/authContext';


const ProfileUser = () => {
    const {logout} = useAuth();
    const currentUser = localStorage.getItem('username');
    const {username} = useParams();
    const [userPost, setUserPost] = useState([]);
    const [followers,setFollowers] = useState([]); //estado de seguidos
    const [followings,setFollowings] = useState([]); //estado de seguires
    const [isFollow, setIsFollow] = useState(false);
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
                setUserPost(res.posts);
                
                //Obtener seguidores
                const res2 = await getFollowers(username);
                if(res2.followers.some(f=> f.username=== currentUser)){
                    setIsFollow(true)
                }else{
                    setIsFollow(false)
                }
                setFollowers(res2.followers);

                //Obtener seguidores
                const res3 = await getFollowings(username);
                setFollowings(res3.followings);

              }
            } catch (error) {
              navigate("/");
              console.log(error.response?.data || error.message);
            }
      }
      handletEffect();
      
    }, [])

    //boton de Seguir/dejar de seguir
    const handletClick = async () => {
        try {
            if (isFollow) {
            const res = await unfollowUser(username);
                setIsFollow(false);
                setFollowers(prev => prev.filter(f => f.username !== currentUser));
            } else {
                const res = await followUser(username);
                setIsFollow(true);
                setFollowers(prev => [...prev, { username: currentUser }]);
            }
        } catch (error) {
          const msg = error.response?.data?.message;
          if (msg === 'token expired') {
            logout();
            navigate('/login');
          }
        }
    };
    

    return (
        
        <div className="container">
            <div className="row mt-5">
                
                    <div className="col-10 col-sm-8 col-md-4 mx-auto mt-3">
                        <div className="bg-light rounded p-4 shadow-sm">
                            <h2 className="text-center mb-3">{username}</h2>
                            <div className="d-flex justify-content-around">
                                <span className='bi bi-people-fill'><strong> Seguidores:</strong> {followers.length}</span>
                                <span><i className="bi bi-person-check-fill"></i> Siguiendo: {followings.length}</span>
                            </div>
                               <button
                                onClick={handletClick}
                                className={`btn d-flex mx-auto mt-4 ${isFollow ? 'btn-danger' : 'btn-success'}`}
                                >
                                {isFollow ? 'Dejar de seguir' : 'Seguir'}
                                </button>
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