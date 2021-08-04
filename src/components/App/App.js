import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <h1>Hello</h1>
            )
          }} />
        </Switch>
      </main>
    )
  }
}

export default App;
