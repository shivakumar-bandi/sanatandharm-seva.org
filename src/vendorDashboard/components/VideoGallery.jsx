import React, { useEffect, useRef } from 'react';
import './VideosPage.css';

const VideosPage = ({ videoSrcs = [] }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === 0) {
        video.play();
      }

      video.addEventListener('ended', () => {
        const nextVideo = videoRefs.current[index + 1];
        if (nextVideo) {
          nextVideo.play();
        }
      });
    });
  }, [videoSrcs]);

  return (
    <div className="videos-page">
      <div className="videos-container">
        {videoSrcs.length > 0 ? (
          videoSrcs.map((src, index) => (
            <div key={index} className="video-card">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={src}
                className="video-frame"
                muted
                autoPlay
                playsInline
                loop
              ></video>
              <h2 className="video-title">Bhagwat Geeta in 1 min</h2> {/* Your Title */}
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
