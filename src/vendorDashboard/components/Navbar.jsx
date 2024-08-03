import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaUserPlus, FaHome, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext'; // Adjust the path as necessary

const Navbar = ({ ShowLoginHandler, ShowRegister }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`navSection ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="dashboardIcon">
        <FaHome className={`dashboardIconImage ${isDarkMode ? 'dark' : 'light'}`} />
      </div>
      <div className="logo">
        <img src="./WhatsApp.jpg" alt="Sanatana Dharm Logo" />
        <h1 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h1>
      </div>
      <div className="userAuth">
        <span className="authItem" onClick={ShowLoginHandler}>
          <FaSignInAlt className={`authIcon ${isDarkMode ? 'dark' : 'light'}`} /> Login
        </span>
        <span className="authItem" onClick={ShowRegister}>
          <FaUserPlus className={`authIcon ${isDarkMode ? 'dark' : 'light'}`} /> Register
        </span>
      </div>
      <div className="themeToggle" onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </div>
    </div>
  );
};

export default Navbar;
