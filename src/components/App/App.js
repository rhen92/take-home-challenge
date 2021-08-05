import React, { Component } from 'react';
import './App.css';
import { getArticles } from '../../api-calls';
import Articles from '../Articles/Articles';
import Header from '../Header/Header';
import Spotlight from '../Spotlight/Spotlight';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      filteredArticles: [],
      message: null
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

  filterArticles = (value) => {
    const searchArticles = this.state.articles.filter(article => {
      return article.subsection.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({filteredArticles: searchArticles}, () => this.showMessage(value))
  }

  showMessage = (value) => {
    if (!this.state.filteredArticles.length && value) {
      this.setState({message: 'No matches found'})
    } else {
      this.setState({message: 'Here are your matches'})
    }
    if (!value) {
      this.setState({message: ''})
    }
  }

  findSelectedArticle = (title) => {
    const article = this.state.articles.find(article => article.title === title);
    return article
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => {
            const whichArticles = this.state.filteredArticles.length ? this.state.filteredArticles : this.state.articles;
            return (
              <React.Fragment>
                <Header filterArticles={this.filterArticles} message={this.state.message} />
                <Articles articles={whichArticles} message={this.state.message} />
              </React.Fragment>
            )
          }} />
          <Route exact path="/:title" render={({match}) => {
            const { title } = match.params;
            console.log(title)
            return <Spotlight title={title} findSelectedArticle={this.findSelectedArticle} />
          }} />
        </Switch>
      </main>
    )
  }
}

export default App;
