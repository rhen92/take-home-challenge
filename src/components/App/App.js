import React, { Component } from 'react';
import './App.css';
import { getArticles } from '../../api-calls';
import Articles from '../Articles/Articles';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount = () => {
    getArticles()
      .then(data => {
        const newsArticles = data.results.reduce((obj, result) => {
          let articleInfo = {
            'subsection': result.subsection,
            'title': result.title,
            'abstract': result.abstract,
            'url': result.url,
            'byline': result.byline,
            'published_date': result.published_date,
            'image': result.multimedia
          }
          obj.push(articleInfo)
          return obj
        }, [])
        this.setState({articles: newsArticles})
      })
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Articles articles={this.state.articles} />
            )
          }} />
        </Switch>
      </main>
    )
  }
}

export default App;
