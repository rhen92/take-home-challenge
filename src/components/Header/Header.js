import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchBarValue: '',
    }
  }

  filterArticlesBySearch = event => {
    this.setState({searchBarValue: event.target.value}, () => {
      this.props.filterArticles(this.state.searchBarValue)
    })
  }

  render() {
    return (
      <header>
        <h1 className='logo'>World News Insider</h1>
        <input
        type='text'
        placeholder='Search by Continent'
        onChange={event => this.filterArticlesBySearch(event)}
        />
        <p>{!this.props.message ? '' : this.props.message}</p>
      </header>
    )
  }
}

export default Header;
