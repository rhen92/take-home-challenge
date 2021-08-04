import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, image, continent }) => {
  return (
    <article className='card'>
      <h2>{title}</h2>
      <img src={!image ? <h3>Loading image...</h3> : image[3].url} alt={!image ? <h3>Loading image...</h3> : image[3].caption} />
      <h3>Continent: {!continent ? 'Not listed' : continent.charAt(0).toUpperCase() + continent.slice(1)}</h3>
    </article>
  )
}

export default ArticleCard;
