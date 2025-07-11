import {Navigate, Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import PrivateRoute from './pages/PrivateRoute';
import ProfileUser from './pages/ProfileUser';
import Post from './pages/Post';

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
        }/>
         <Route path="/post/:idPost" 
          element={
          <PrivateRoute>
            <Post />
          </PrivateRoute>
        }/>

      <Route path="*" element={<Navigate to="/" replace />} />    
      </Routes>
    </>
   
  )
}

export default App
