import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"


const CardPost = ({post}) => {
    
  return (
    <div key={post.id}  className="col-md-4 m-3 p-3 border rounded bg-white shadow-sm">
        <h5 className="text-secondary">{post.User.username}</h5>
        <p className="mb-1">{post.content}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            Publicado el {formatDate(post.createdAt)}
          </small>
          <div>
            <Link to={`/post/${post.id}`} className="text-primary me-2" title="Ver comentarios o comentar">
              <i className="bi bi-chat" role="button"></i>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default CardPost