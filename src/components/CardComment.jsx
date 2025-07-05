import { Link } from "react-router-dom"
import { formatDate } from "../utils/utils"


const CardComment = ({comment}) => {
    
  return (
    <div key={comment.id}  className="col-md-9 mx-auto m-3 p-3 border rounded bg-white shadow-sm">
        <h5 className="text-secondary">{comment.User.username}</h5>
        <p className="mb-1">{comment.content}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            Publicado el {formatDate(comment.createdAt)}
          </small>
          <div>
          </div>
        </div>
      </div>
  )
}

export default CardComment