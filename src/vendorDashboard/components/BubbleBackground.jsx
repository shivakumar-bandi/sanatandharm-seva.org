// BubbleBackground.jsx
import React, { useEffect } from 'react';
import './BubbleBackground.css'; // Import the CSS for bubbles

const BubbleBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.bubble-container');
    const numBubbles = 100; // Adjust the number of bubbles

    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      // Randomize bubble size
      const size = Math.random() * 50 + 10; // Size between 10px and 60px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Randomize bubble color
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
      bubble.style.backgroundColor = color;

      // Randomize bubble position
      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.top = `${Math.random() * 100}vh`; // Use top instead of bottom

      // Randomize animation delay
      bubble.style.animationDelay = `${Math.random() * 10}s`;

      container.appendChild(bubble);
    }
  }, []);

  return <div className="bubble-container"></div>;
};

export default BubbleBackground;
