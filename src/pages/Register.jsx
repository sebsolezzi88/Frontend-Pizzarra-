import  { useState } from 'react'
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    
    //para navegar a otras pages
    const navigate = useNavigate();

    //Estado para llenar el formulario
    const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordrep: ''
    });
    
    //estados de mensaje 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e)=>{

    e.preventDefault();
    try {

    const respuesta = await register(formData);
    setError('');
    setSuccess(respuesta.message);
    
    //Redigir al login despues de 2 segundos
    setTimeout(() => {
        navigate('/login');
    }, 2000);
  } catch (err) {
    setError(err.response?.data?.message || 'Error desconocido');
  }
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto mt-5">
                <form onSubmit={handleSubmit} className="bg-light border border-3 border-light p-3 rounded shadow">
                {error && <p className='text-center text-uppercase bg-danger text-light p1'>{error}</p>}
                {success && <p className='text-center text-uppercase bg-success text-light p1'>{success}</p>}
                <legend className="text-dark text-center">Registrate para acceder a funciones</legend>
                  <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label text-uppercase">UserName</label>
                  <input type="text" 
                    className="form-control" 
                    name="username"
                    onChange={handleChange}
                    required
                  />     
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-uppercase">Password</label>
                  <input type="password" 
                    className="form-control" 
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label text-uppercase">Repite Password</label>
                  <input type="password" 
                    className="form-control" 
                    name="passwordrep"
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark text-uppercase d-block mx-auto">Registrarse</button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register