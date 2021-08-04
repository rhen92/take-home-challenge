import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ title, image }) => {
  console.log(image)
  return (
    <article>
      <h2>{title}</h2>
      <img src={!image ? <h3>Loading image...</h3> : image[3].url} alt={!image ? <h3>Loading image...</h3> : image[3].caption} />
    </article>
  )
}

export default ArticleCard;
