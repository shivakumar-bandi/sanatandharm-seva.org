import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const VideoPage = ({ videoSrcs }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      videoRefs.current.forEach((video) => {
        const rect = video.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="videos-page">
      <div className="videos-container">
        {videoSrcs.map((src, index) => (
          <div key={index} className="video-card">
            <video
              className="video-frame"
              ref={(el) => (videoRefs.current[index] = el)}
              muted={false}
              loop
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
