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
      continent={article.subsection}
      />
    )
  })

  return (
    <section className='news-container'>
      {newsArticles}
    </section>
  )
}

export default Articles;
