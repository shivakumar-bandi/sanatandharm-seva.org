import React, { useState } from 'react';
import './Navbar.css';
import { FaSignInAlt, FaUserPlus, FaHome } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons

const Navbar = ({ ShowLoginHandler, ShowRegister }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

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
