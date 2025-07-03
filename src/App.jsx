import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import PrivateRoute from './pages/PrivateRoute';
import ProfileUser from './pages/ProfileUser';

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/userprofile/:username' element={<ProfileUser/>}/>

        {/* Ruta protegida */}
        <Route path="/profile" 
          element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } 
        />
      </Routes>
    </>
   
  )
}

export default App
