import { createContext, useContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
   const [user, setUser] = useState(null);
   const navigate = useNavigate();
  
  // Leer usuario desde localStorage al iniciar
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setUser({ username }); // Puedes agregar más datos si los guardas también
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('username', userData.username);
    localStorage.setItem('token', userData.token);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    navigate('/login');
  };


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);