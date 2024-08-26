// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaUserPlus, FaMoon, FaSun, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import { useUser } from '../contexts/UserContext';

const Navbar = ({ ShowLoginHandler, ShowRegister, isDarkMode, toggleDarkMode ,searchQuery,setSearchQuery,handleSearch}) => {
  const { user, logout } = useUser();

  return (
    <div className={`navSection ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='search'>
      {/* <span className="navSection">
  <input
    type="text"
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button onClick={handleSearch}>Search</button>
</span> */}
      </div>

      <div className="logo">
        <img src="./WhatsApp.jpg" alt="Sanatana Dharm Logo" />
        <h1 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h1>
      </div>
      <div className="userAuth">
        {user ? (
          <span className="authItem" onClick={logout}>
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
