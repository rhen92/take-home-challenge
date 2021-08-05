import React from 'react';
import './Spotlight.css';
import { Link } from 'react-router-dom';

const Spotlight = ({ title, findSelectedArticle }) => {
  const articleWanted = findSelectedArticle(title);
  return (
    <section>
      <Link to={'/'} className='back-button'>🔙</Link>
      <h1>{articleWanted.title}</h1>
      <h2>Published: {new Date(articleWanted.published_date).toDateString()}</h2>
      <h3>{articleWanted.byline}</h3>
      <img className='spotlight-image' src={!articleWanted.image ? <h3>Loading image...</h3> : articleWanted.image[0].url} alt={!articleWanted.image ? <h3>Loading image...</h3> : articleWanted.image[0].caption} />
      <p>Synopsis: {articleWanted.abstract}</p>
      <a href={articleWanted.url} target='_blank' rel='noreferrer'>Click here to read more</a>
    </section>
  )
}


export default Spotlight;
