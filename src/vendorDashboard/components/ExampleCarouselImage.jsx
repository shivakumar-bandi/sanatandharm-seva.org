import React from 'react';
import PropTypes from 'prop-types';
import './ExampleCarouselImage.css';

const ExampleCarouselImage = ({ src, text, onClick }) => {
  return (
    <div className="carousel-image-container" onClick={onClick}>
      <img
        className="d-block w-100"
        src={src}
        alt={text}
      />
      <div className="carousel-text-overlay">{text}</div>
    </div>
  );
};

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func // Make the onClick prop optional
};

export default ExampleCarouselImage;
