import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './Updates.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdHome } from 'react-icons/md';
import BubbleBackground from './BubbleBackground'; // Import BubbleBackground

const updates = [
  {
    title: 'Teachings of the Bhagavad Gita',
    description: 'Exploring the profound teachings of the Bhagavad Gita.',
    image: '/axios/prince.jpg', // Correct image path
  },
  {
    title: 'Life of Lord Krishna',
    description: 'Insights into the life and teachings of Lord Krishna.',
    image: '/axios/vishnu.jpg', // Correct image path
  },
  {
    title: 'Vedic Rituals',
    description: 'Understanding the significance of various Vedic rituals.',
    image: '/axios/boy.jpg', // Correct image path
  },
  {
    title: 'Yoga and Meditation',
    description: 'The role of Yoga and Meditation in Sanatan Dharm.',
    image: '/axios/monk.jpg', // Correct image path
  },
  {
    title: 'Festivals of Sanatan Dharm',
    description: 'Celebrating the various festivals and their meanings.',
    image: '/axios/jewelry.jpg', // Correct image path
  },
];

const Updates = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="updates-container">
      <BubbleBackground /> {/* Add the BubbleBackground component */}
      <button className="go-home-button" onClick={goHome}>
        <MdHome className="home-icon" />
        Go Back Home
      </button><br />
      <h2 className="updates-title">Updates on Sanatan Dharm</h2>
      <Slider {...settings}>
        {updates.map((update, index) => (
          <div key={index} className="update-card">
            <div
              className="update-image"
              style={{ backgroundImage: `url(${update.image})` }}
            ></div>
            <div className="update-content">
              <h3 className="update-title">{update.title}</h3>
              <p className="update-description">{update.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Updates;
