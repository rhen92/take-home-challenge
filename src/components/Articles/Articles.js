import React from 'react';
import './Articles.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = ({ articles, message }) => {
  let id = 1;
  const newsArticles = articles.map(article => {
    return (
      <ArticleCard
      key={id++}
      title={article.title}
      image={article.image}
      continent={article.subsection}
      />
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
