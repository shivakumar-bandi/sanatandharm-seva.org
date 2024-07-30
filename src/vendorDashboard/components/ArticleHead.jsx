import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import './ArticleHead.css'

const ArticleHead = () => {
    console.log('ArticleHead rendered');

    const navigate = useNavigate();

    const goHome = () => {
      navigate('/');
    };

    return (
        <div className="navsection">
            <div className="logo">
                <img src="./axios/th (10).jpeg" alt="Sanatana Dharm Logo" />
                <h1 className="animated-text">సనాతన ధర్మ్ సేవా సమితి</h1>
            </div>
            <div>
                <button className="go-home-button" onClick={goHome}>
                    <i className="fas fa-arrow-left"></i> Go Back Home
                </button>
            </div>
        </div>
    );
};

export default ArticleHead;
