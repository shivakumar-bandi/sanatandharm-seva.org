import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventHeader.css'; // Import the CSS file for styling

const EventHeader = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="event-head">
      <div className="logo">
        <img src="./axios/th (10).jpeg" alt="Sanatana Dharm Logo" />
        <h1 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h1>
      </div>
      <button className="go-home-button" onClick={goHome}>
        <span className="arrow">←</span> Go Back Home
      </button>
    </div>
  );
};

export default EventHeader;
