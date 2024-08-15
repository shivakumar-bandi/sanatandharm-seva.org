// VideosPage.js
import React from 'react';
import './Gallery.css'; // Ensure you have this file for styling

const VideosPage = ({ videoIds }) => {
  return (
    <div className="videos-page">
      <div className="videos-container">
        {videoIds.map((id, index) => (
          <div key={index} className="video-card">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Video ${index + 1}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
