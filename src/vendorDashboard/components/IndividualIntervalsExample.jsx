import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import './IndividualIntervalsExample.css';

function IndividualIntervalsExample({ navigateToArticle, navigateToEvent, navigateToFestival }) {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item interval={1000} onClick={navigateToArticle}>
        <ExampleCarouselImage 
          src="./axios/temple.jpg" 
          text="First slide" 
        />
        <Carousel.Caption>
          <h2>The Human Body Is The Temple Of God</h2>
          <p>One who introduces the light of awareness...</p>
          <span>Click to view articles</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} onClick={navigateToEvent}>
        <ExampleCarouselImage 
          src="./axios/shiva.jpg" 
          text="Second slide" 
        />
        <Carousel.Caption>
          <h2>The whole mantra AUM</h2>
          <p>Individuality, Independence, Courage, Overpowering the mind. In old traditional Sanskrit scriptures...</p>
          <span>Click to view events</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item onClick={navigateToFestival}>
        <ExampleCarouselImage 
          src="./axios/654401.jpg" 
          text="Third slide" 
        />
        <Carousel.Caption>
          <h2>We Have The Power Today To Change Tomorrow</h2>
          <p>SanatanaDharma is the final eternal way...</p>
          <span>Click to view festivals</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
