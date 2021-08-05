import React from 'react';
import './Articles.css';
import ArticleCard from '../ArticleCard/ArticleCard';
import { Link } from 'react-router-dom';

const Articles = ({ articles, message }) => {
  let id = 1;
  const newsArticles = articles.map(article => {
    return (
      <Link to={`/${article.title}`} className='link' key={id++}>
      <ArticleCard
      title={article.title}
      image={article.image}
      continent={article.subsection}
      />
      </Link>
    )
  });
  const whichClassName = message === 'No matches found' ? 'nothing' : 'news-container';

  return (
    <section className={whichClassName}>
      {newsArticles}
    </section>
  )
}

export default Articles;
