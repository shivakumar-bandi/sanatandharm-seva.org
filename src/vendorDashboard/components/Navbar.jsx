import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaUserPlus, FaSignOutAlt, FaHome, FaMoon, FaSun } from 'react-icons/fa'; // Import icons

const Navbar = ({ ShowLoginHandler, ShowRegister, isLoggedIn, handleLogout, isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`navSection ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="dashboardIcon">
        <FaHome className="dashboardIconImage" /> 
      </div>
      <div className="logo">
        <img src="./WhatsApp.jpg" alt="Sanatana Dharm Logo" />
        <h1 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h1>
      </div>
      <div className="userAuth">
        {isLoggedIn ? (
          <span className="authItem" onClick={handleLogout}>
            <FaSignOutAlt className="authIcon" /> Logout
          </span>
        ) : (
          <>
            <span className="authItem" onClick={ShowLoginHandler}>
              <FaSignInAlt className="authIcon" /> Login
            </span>
            <span className="authItem" onClick={ShowRegister}>
              <FaUserPlus className="authIcon" /> Register
            </span>
          </>
        )}
        <span className="authItem" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun className="authIcon" /> : <FaMoon className="authIcon" />} 
        </span>
      </div>
    </div>
  );
};

export default Navbar;
