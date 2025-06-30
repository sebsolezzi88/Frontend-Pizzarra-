import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

const Login = () => {

  const navigate = useNavigate();

  //Estado para llenar el formulario
  const [formData, setFormData] = useState({
    username:'',
    password:''
  })
  //estados de mensaje 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  //Funcion login de formulario
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      setError('');
      const response = await login(formData);
      localStorage.setItem('token',response.token);
      localStorage.setItem('username',response.username);
      navigate('/profile');
    } catch (err) {
      setError(err.response?.data?.message || 'Error desconocido');
      console.log(err.response?.data?.message)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mx-auto mt-5">
                <form onSubmit={handleSubmit} className="bg-light border border-3 border-light  p-3 rounded shadow">
                  {error && <p className='text-center text-uppercase bg-danger text-light p1'>{error}</p>}
                {success && <p className='text-center text-uppercase bg-success text-light p1'>{success}</p>}
                <legend className="text-dark text-center">Logueate para acceder a funciones</legend>
                  <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label text-uppercase">UserName</label>
                  <input type="text" className="form-control" 
                  name="username"
                  required
                  onChange={handleChange}
                  />    
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label text-uppercase">Password</label>
                  <input type="password" className="form-control" 
                  name="password"
                  required
                  onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-dark text-uppercase d-block mx-auto">Login</button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login