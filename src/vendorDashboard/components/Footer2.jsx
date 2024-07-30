import React from 'react';
import './Footer2.css';
import { FaArrowUp } from 'react-icons/fa'; // For the scroll button icon

const Footer2 = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer2">
      <div className="footer2-content">
        <p>
        గురుకృపా హి కేవలం శిష్యపరమమంగలం l<br />
        శిష్యుడి పరమ మంగలం అనగా మోక్షప్రాప్తి, కేవలం గురుకృప వలనే సాధ్యమగును.
        </p>
        <p>© 2024 Sanatan Sanstha - All Rights Reserved</p>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Footer2;
