import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    const isAdmin = email === 'nanishiva2022001@gmail.com' && password === '6303360927';
    const userData = { email, password, role: isAdmin ? 'admin' : 'user' };

    setUser(userData);
    navigate('/welcome');
    return true;
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
