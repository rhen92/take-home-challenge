import React from 'react';
import './Articles.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = ({ articles }) => {
  let id = 1;
  const newsArticles = articles.map(article => {
    return (
      <ArticleCard
      key={id++}
      title={article.title}
      image={article.image}
      />
    )
  })

  return (
    <section>
      {newsArticles}
    </section>
  )
}

export default Articles;
