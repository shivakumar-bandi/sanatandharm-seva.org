// ShortVideoEmbed.js
import React from 'react';

const ShortVideoEmbed = () => {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/9AQM6vOBpoc"
        title="YouTube Short Video"
        width="560"
        height="315"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ShortVideoEmbed;
