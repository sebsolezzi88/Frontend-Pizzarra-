
const CardPost = () => {
  return (
    <div  className="mb-3 p-3 border rounded bg-white shadow-sm">
        <p className="mb-1">Texto del comentarioa</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            Publicado el 30 de junio de 2025, 20:00
          </small>
          <div>
            <span role="button" className="text-primary me-2" title="Ver comentarios">
              <i className="bi bi-chat"></i>
            </span>
          </div>
        </div>
      </div>
  )
}

export default CardPost