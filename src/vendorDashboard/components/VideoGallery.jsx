// VideoPlayer.js
import React from 'react';
import './Gallery.css'
const VideoPlayer = ({ videoSrcs }) => {
  return (
    <div>
      {videoSrcs.map((src, index) => (
        <video key={index} controls autoPlay muted>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default VideoPlayer;
