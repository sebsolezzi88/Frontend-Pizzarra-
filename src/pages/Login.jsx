import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto mt-5">
                <form className="bg-light border border-3 border-light  p-3 rounded shadow">
                <legend className="text-dark text-center">Logueate para acceder a funciones</legend>
                  <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label text-uppercase">UserName</label>
                  <input type="email" className="form-control" id="username"></input>     
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label text-uppercase">Password</label>
                  <input type="password" className="form-control" id="password"></input>
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