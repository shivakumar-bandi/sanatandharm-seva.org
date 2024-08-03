import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import './Navbar.css';

const Navbar = ({ ShowLoginHandler, ShowRegister }) => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="navSection">
      <div className="dashboardIcon">
        <i className="dashboardIconImage fas fa-bars" />
      </div>
      <div className="logo" onClick={() => navigate('/')}>
        <img src="/path/to/logo.png" alt="Logo" />
        <h1>Sanatan Dharma</h1>
      </div>
      <div className="userAuth">
        <div className="authItem" onClick={ShowLoginHandler}>
          <i className="authIcon fas fa-sign-in-alt" />
          Login
        </div>
        <div className="authItem" onClick={ShowRegister}>
          <i className="authIcon fas fa-user-plus" />
          Register
        </div>
        <div className="authItem themeToggle" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
