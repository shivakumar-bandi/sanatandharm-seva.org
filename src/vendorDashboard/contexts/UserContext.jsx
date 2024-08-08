import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user data from local storage:", error);
        localStorage.removeItem('user'); // Remove invalid data from local storage
      }
    }
  }, []);

  const login = async (email, password) => {
    const isAdmin = email === 'nanishiva2022001@gmail.com' && password === '6303360927';
    const userData = { email, password, role: isAdmin ? 'admin' : 'user' };

    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/welcome');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
