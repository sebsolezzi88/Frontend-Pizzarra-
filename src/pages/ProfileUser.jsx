import {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostByUsername } from '../api/post';


const ProfileUser = () => {

    const {username} = useParams();
    const navigate = useNavigate();

    if(!username){
        return navigate('/');
    }

    useEffect(() => {
      
      
    }, [])
    

    return (
        
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="bg-light">
                        Nombre usuario
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser