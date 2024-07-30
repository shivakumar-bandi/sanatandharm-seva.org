import React from 'react';
import YouTubeLive from './YouTubeLive';
import LatestArticles from './LatestArticles';
import './Container.css'; // New CSS file for the parent container

const Container = () => {
  return (
    <div className="container">
      <YouTubeLive />
      <LatestArticles />
    </div>
  );
};

export default Container;
