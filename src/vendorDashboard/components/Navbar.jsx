import React from 'react';
import './Navbar.css';
import { FaSignInAlt, FaUserPlus, FaHome } from 'react-icons/fa'; // Import icons

const Navbar = ({ ShowLoginHandler, ShowRegister }) => {
  return (
    <div className="navSection">
      <div className="dashboardIcon">
        <FaHome className="dashboardIconImage" /> 
      </div>
      <div className="logo">
        <img src="./WhatsApp.jpg" alt="Sanatana Dharm Logo" />
        <h1 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h1>
      </div>
      <div className="userAuth">
        <span className="authItem" onClick={ShowLoginHandler}>
          <FaSignInAlt className="authIcon" /> Login
        </span>
        <span className="authItem" onClick={ShowRegister}>
          <FaUserPlus className="authIcon" /> Register
        </span>
      </div>
    </div>
  );
};

export default Navbar;
