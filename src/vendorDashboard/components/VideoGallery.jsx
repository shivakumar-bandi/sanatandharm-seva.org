import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Gallery.css'; // Import your existing styles
import BubbleBackground from '../components/BubbleBackground.jsx'; // Import the BubbleBackground component

const VideoPage = ({ videoSrcs }) => {
  const videoRefs = useRef([]);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    centerMode: true,
    centerPadding: '20px', // Add some padding around the center item
    afterChange: (current) => {
      videoRefs.current.forEach((video, index) => {
        if (index === current) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
  };

  const handleVideoEnd = (index) => {
    // Move to the next slide when the video ends
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="videos-page">
      <BubbleBackground />
      <div className="videos-container">
        <Slider {...settings} ref={sliderRef}>
          {videoSrcs.map((src, index) => (
            <div key={index} className="video-card">
              <video
                className="video-frame"
                ref={(el) => (videoRefs.current[index] = el)}
                muted={false}
                loop
                onEnded={() => handleVideoEnd(index)} // Handle end of video playback
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoPage;
