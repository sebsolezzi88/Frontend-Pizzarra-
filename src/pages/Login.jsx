
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto mt-5">
                <form className="bg-light border border-3 border-light  p-3 rounded shadow">
                <legend className="text-dark text-center">Logueate para acceder a funciones</legend>
                  <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label text-uppercase">UserName</label>
                  <input type="email" class="form-control" id="username"></input>     
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label text-uppercase">Password</label>
                  <input type="password" class="form-control" id="password"></input>
                </div>
                <button type="submit" class="btn btn-dark text-uppercase d-block mx-auto">Login</button>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login