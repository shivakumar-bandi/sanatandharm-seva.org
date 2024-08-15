import React from 'react';
import './Gallery.css';

const VideoPage = ({ videoSrcs }) => {
  return (
    <div className="videos-page">
      <div className="videos-container">
        {videoSrcs.map((src, index) => (
          <div key={index} className="video-card">
            <video className="video-frame" autoPlay muted={false} loop>
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-title">Video {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
