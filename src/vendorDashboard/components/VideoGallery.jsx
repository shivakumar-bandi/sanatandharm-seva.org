import React, { useEffect, useRef } from 'react';
import './Gallery.css';

const VideosPage = ({ videoIds = [] }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    if (videoRefs.current.length > 0) {
      videoRefs.current.forEach((iframe, index) => {
        iframe.addEventListener('ended', () => {
          const nextVideo = videoRefs.current[index + 1];
          if (nextVideo) {
            nextVideo.src += "&autoplay=1";
          }
        });
      });
    }
  }, [videoIds]);

  return (
    <div className="videos-page">
      <div className="videos-container">
        {videoIds.length > 0 ? (
          videoIds.map((id, index) => (
            <div key={index} className="video-card">
              <iframe
                ref={(el) => (videoRefs.current[index] = el)}
                src={`https://www.youtube.com/embed/${id}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video ${index + 1}`}
                className="video-frame"
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
