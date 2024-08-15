// VideosPage.js
import React from 'react';
import './Gallery.css';

const VideosPage = ({ videoIds = [] }) => {
  return (
    <div className="videos-page">
      <div className="videos-container">
        {videoIds.length > 0 ? (
          videoIds.map((id, index) => (
            <div key={index} className="video-card">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video ${index + 1}`}
              ></iframe>
            </div>
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
};

export default VideosPage;
