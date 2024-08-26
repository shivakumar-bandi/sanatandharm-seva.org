import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css'; // Update the CSS file name if needed
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Navbar = ({ ShowUpdates, ShowTeam, showVideos }) => {
  const [dropdownVisible, setDropdownVisible] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleItemClick = (callback) => {
    callback();
    setDropdownVisible(''); // Hide dropdown menu after item is selected
  };

  const canEditOrDelete = user && user.email === 'nanishiva2022001@gmail.com' && user.role === 'admin';

  return (
    <div>
      <div className="scrolling-text-container top-scrolling">
        <div className="scrolling-text">
          సనాతన ధర్మం సర్వ సమాజానికి శ్రేయస్సును కలిగిస్తుంది | ధర్మం జీవన విధానం | వేదాలు మరియు ఉపనిషత్తుల ద్వారా మార్గనిర్దేశం చేయబడింది |
        </div>
      </div>
      
      <nav className="navbar" ref={dropdownRef}>
        <div className="navbar-left">
          <div className="navbar-item">
            <div className={`dropdown-toggle ${dropdownVisible === 'article' ? 'show' : ''}`}
                 onMouseEnter={() => setDropdownVisible('article')}
                 onMouseLeave={() => setDropdownVisible('')}>
              Articles
              <ul className="dropdown-menu">
                {canEditOrDelete && (
                  <li><a href="#" onClick={() => navigate('/add-article')}>Add New Article</a></li>
                )}
                <li><a href="#" onClick={() => navigate('/article-list')}>View Articles</a></li>
              </ul>
            </div>
          </div>

          <div className="navbar-item">
            <div className={`dropdown-toggle ${dropdownVisible === 'event' ? 'show' : ''}`}
                 onMouseEnter={() => setDropdownVisible('event')}
                 onMouseLeave={() => setDropdownVisible('')}>
              Events
              <ul className="dropdown-menu">
                {canEditOrDelete && (
                  <li><a href="#" onClick={() => navigate('/add-event')}>Add New Event</a></li>
                )}
                <li><a href="#" onClick={() => navigate('/event-list')}>Show Events</a></li>
              </ul>
            </div>
          </div>

          <div className="navbar-item">
            <div className={`dropdown-toggle ${dropdownVisible === 'festival' ? 'show' : ''}`}
                 onMouseEnter={() => setDropdownVisible('festival')}
                 onMouseLeave={() => setDropdownVisible('')}>
              Festivals
              <ul className="dropdown-menu">
                {canEditOrDelete && (
                  <li><a href="#" onClick={() => navigate('/add-festival')}>Add New Festival</a></li>
                )}
                <li><a href="#" onClick={() => navigate('/festival-list')}>Show Festivals</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <div id="updates" className="navbar-item">
            <a href="#" onClick={ShowUpdates}>Updates</a>
          </div>
          <div id="videos" className="navbar-item">
            <a href="#" onClick={showVideos}>Videos</a>
          </div>
          <div id="team" className="navbar-item">
            <a href="#" onClick={ShowTeam}>Team Members</a>
          </div>
        </div>
      </nav>


    </div>
  );
};

export default Navbar;
