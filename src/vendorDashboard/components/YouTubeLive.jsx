import React from 'react';
import './YouTubeLive.css';

const YouTubeLive = () => {
  return (
    <div className="youtube-live">
      <h2>YouTube Live</h2>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/IcGRIMPoy_s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeLive;
