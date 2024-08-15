import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const VideoPage = ({ videoSrcs }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      videoRefs.current.forEach((video) => {
        const rect = video.getBoundingClientRect();
        const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isFullyVisible) {
          video.play().catch((error) => {
            // Autoplay may be blocked; you could handle this error gracefully if needed.
            console.error("Video autoplay blocked:", error);
          });
        } else {
          video.pause();
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check when component mounts
    handleScroll();

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
              muted={true}  // Set muted to true for autoplay to work
              loop
              playsInline
              preload="auto"
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
