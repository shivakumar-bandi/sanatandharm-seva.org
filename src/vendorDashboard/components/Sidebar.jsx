import React, { useState, useRef, useEffect } from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Navbar = ({ ShowUpdates, ShowTeam ,showVideos}) => {
  const [dropdownVisible, setDropdownVisible] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useUser();

  const toggleDropdown = (dropdownName) => {
    setDropdownVisible(prev => (prev === dropdownName ? '' : dropdownName));
  };

  const handleItemClick = (callback) => {
    callback();
    setDropdownVisible(''); // Hide dropdown menu after item is selected
  };

  // Click outside handler
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(''); // Hide dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const canEditOrDelete = user && user.email === 'nanishiva2022001@gmail.com' && user.role === 'admin';

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className={`navbar-item ${dropdownVisible === 'article' ? 'show' : ''}`}>
        <button onClick={() => toggleDropdown('article')} className="dropdown-toggle">
          Articles
        </button>
        <ul className="dropdown-menu">
          {canEditOrDelete && (
            <li><a href="#" onClick={() => navigate('/add-article')}>Add New Article</a></li>
          )}
          <li><a href="#" onClick={() => navigate('/article-list')}>View Articles</a></li>
        </ul>
      </div>

      <div className={`navbar-item ${dropdownVisible === 'event' ? 'show' : ''}`}>
        <button onClick={() => toggleDropdown('event')} className="dropdown-toggle">
          Events
        </button>
        <ul className="dropdown-menu">
          {canEditOrDelete && (
            <li><a href="#" onClick={() => navigate('/add-event')}>Add New Event</a></li>
          )}
          <li><a href="#" onClick={() => navigate('/event-list')}>Show Events</a></li>
        </ul>
      </div>

      <div className={`navbar-item ${dropdownVisible === 'festival' ? 'show' : ''}`}>
        <button onClick={() => toggleDropdown('festival')} className="dropdown-toggle">
          Festivals
        </button>
        <ul className="dropdown-menu">
          {canEditOrDelete && (
            <li><a href="#" onClick={() => navigate('/add-festival')}>Add New Festival</a></li>
          )}
          <li><a href="#" onClick={() => navigate('/festival-list')}>Show Festivals</a></li>
        </ul>
      </div>

      <div id='updates' className="navbar-item">
        <a href="#" onClick={ShowUpdates}>Updates</a>
      </div>
      <div id="videos" className="latest-videos">
        <a href="#" onClick={showVideos}>Videos</a>
      </div>
      <div id='team' className="navbar-item">
        <a href="#" onClick={ShowTeam}>Team Members</a>
      </div>
    </nav>
  );
};

export default Navbar;
