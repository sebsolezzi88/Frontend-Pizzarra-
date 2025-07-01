import { useState, useEffect } from "react";

import { AddPost, deletePost, getPostByUsername,updatePost } from "../api/post";
import Alert from "../components/Alert";
import { formatDate } from "../utils/utils";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [editando, setEditando] = useState(null); // null o el id del post a editar
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [mensaje,setMensaje] = useState({
    type:null,
    message:null
  });
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostByUsername(username);
        setPosts(data.posts);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchPosts();
    }
  }, [username]);

  //funcion para guardar el contentd
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  //funcion del formulario
  const handletSubmit = async (e) => {
    e.preventDefault();
    if(content.length > 250){
        setMensaje({type:'danger',message: "El post no puede superar los 250 caracteres"});
        return
    }
    if(content.trim() === ''){
      setMensaje({type:'danger',message: "El post no puede ir vacio"});
        return
    }
    setMensaje({type:null,message: null});
    try {
      if(editando){
        //modo editar
        const response = await updatePost(editando, content); // función que debes crear
        setPosts(posts.map(post => post.id === editando ? response.post : post));
        setMensaje({ type: 'success', message: 'Publicación actualizada con éxito' });
      }
      else{
        //modo crear
        const response = await AddPost(content);
        setMensaje({ type: 'success', message: 'Publicación creada con éxito' });
        setPosts([response.post, ...posts]);
      }
      setContent(""); 
      setEditando(null); // volver a modo crear
      
  } catch (error) {
    setMensaje({ type: 'danger', message: 'Hubo un error al crear la publicación' });
  } finally{
    setTimeout(() => {
      setMensaje({type:null,message:null})
    }, 2000);
  }
  };

  //Funcion para eliminar post
  const handletClickDelete = async  (postId) =>{
   
    try {
      const response = await deletePost(postId)
      setMensaje({ type: 'success', message: 'Publicación borrada' });
      console.log(response)
      //usar filter para borrar el post del estado
      setPosts(posts.filter(post=> post.id !== postId));
  } catch (error) {
      setMensaje({ type: 'danger', message: 'Hubo un error la publicación' });
    }
    finally{
    setTimeout(() => {
      setMensaje({type:null,message:null})
    }, 2000);
  }
  }

  //Funcionalidad para editar
  const handleClickEditar = (post) => {
  setContent(post.content); // llena el textarea
  setEditando(post.id);     // cambia a modo editar
  }

  if (loading) return <p>Cargando publicaciones...</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mt-2">
          <div className="bg-light rounded p-4">
            {mensaje.message && <Alert type={mensaje.type} message={mensaje.message}/>}
            <form onSubmit={handletSubmit}>
              <label
                for="exampleTextarea"
                class="form-label fs-5 text-uppercase"
              >
                Nueva Publicación
              </label>
              <textarea
                onChange={handleChange}
                class="form-control"
                value={content}
                name="content"
                rows="3"
              />
              
              <button type="submit" className="btn btn-primary d-bloc mt-2">
                {editando ? "Editar publicación" : "Crear publicación"}
              </button>
            </form>
          </div>
        </div>{" "}
        {/* fin del form */}
        <div className="col-12 col-md-6 mt-2">
  <div className="bg-light p-4 rounded">
    <h4 className="text-center">
      Tus últimas publicaciones {username}
    </h4>

    {posts.length === 0 ? (
      <p className="text-center">No hay publicaciones.</p>
    ) : (
      posts.map((post) => (
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
        <span role="button" className="text-secondary me-2" title="Editar">
          <i onClick={() => handleClickEditar(post)} className="bi bi-pencil"></i>
        </span>
        <span role="button" className="text-danger" title="Borrar">
          <i onClick={()=>handletClickDelete(post.id)} className="bi bi-trash"></i>
        </span>
      </div>
    </div>
  </div>
    ))
      )}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Profile;
