// CardContainer.js
import React from 'react';
import Card from './Card';
import './CardContainer.css';

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
