import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import './Welcome.css'; // Import the CSS file

const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user && user.email === 'nanishiva2022001@gmail.com' && user.password === '6303360927') {
      alert('Hello Shiva');
    }

    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home page after 5 seconds
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigate, user]);

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h2 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h2>
        <p>Redirecting you to the home page in 5 seconds...</p>
      </div>
    </div>
  );
};

export default Welcome;
