import React from 'react';
import './LatestArticles.css';

const LatestArticles = () => {
  return (
    <div className="latest-articles">
      <h2>Latest Articles</h2>
      <div className="article">
        <img src="./axios/guruvu.avif" alt="Article 1" />
        <p><a href="#article1">Sanatan Dharma example article 1</a></p>
      </div>
      <div className="article">
        <img src="./axios/6103261.jpg" alt="Article 2" />
        <p><a href="#article2">Sanatan Dharma latest article 2</a></p>
      </div>
      <div className="article">
        <img src="./axios/th (10).jpeg" alt="Article 3" />
        <p><a href="#article3">Sanatan Dharma latest article 3 Lorem ipsum, . Cumque!...</a></p>
      </div>
    </div>
  );
};

export default LatestArticles;
