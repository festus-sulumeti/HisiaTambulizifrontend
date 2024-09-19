import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

// projeect files

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate('/userhome'); // Redirect to the home page after login
  };

  const signup = () => {
    setIsAuthenticated(true);
    navigate('/userhome'); // Redirect to the home page after signup
  }

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
