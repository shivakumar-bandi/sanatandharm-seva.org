import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext'; // Import ThemeContext
import './Sidebar.css';
import './ThemeContext.css'; // Import theme context CSS

const Navbar = ({ShowUpdates, ShowTeam, ShowArticle, ShowEvent, ShowFestival, ShowArticlesTable, ShowEventList, ShowFestivalList}) => {
  const [dropdownVisible, setDropdownVisible] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useUser();
  const { isDarkMode, toggleTheme } = useTheme(); // Use ThemeContext

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
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`} ref={dropdownRef}>
      <button onClick={toggleTheme} className="themeToggle">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

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
          <li><a href="#" onClick={() => navigate('/festival-list')}>Show Festival</a></li>
        </ul>
      </div>

      <div id='updates' className="navbar-item">
        <a href="#" onClick={ShowUpdates}>Updates</a>
      </div>
      
      <div id='team' className="navbar-item">
        <a href="#" onClick={ShowTeam}>Team Members</a>
      </div>
    </nav>
  );
};

export default Navbar;
