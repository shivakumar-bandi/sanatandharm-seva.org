import React from 'react';
import './Gallery.css'; // For styling

const VideoGallery = ({ videos }) => {
  return (
    <div className="video-gallery">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title={`YouTube Short Video ${index + 1}`}
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-description">{video.description}</div>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
