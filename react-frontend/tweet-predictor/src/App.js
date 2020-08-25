import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import HomePage from './components/pages/HomePage'
import Whitehouse from './components/pages/Whitehouse'
import Rdt from './components/pages/Rdt'
import Jb from './components/pages/Jb'
import Mp from './components/pages/Mp'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container" style={classStyle}>
            <Route exact path="/" render={ () => <HomePage /> } />
            <Route path="/rdt" render={() => <Rdt seq={1} />} />
            <Route path="/wh" render={() => <Whitehouse seq={2} />} />
            <Route path="/jb" render={() => <Jb seq={3} />} />
            <Route path="/mp" render={() => <Mp seq={4} />} />
          </div>
        </div>
      </Router>
    );
  }
}

const classStyle = {
  marginRight: 0,
  marginLeft: 0,
  maxWidth: '100vw',
  fontFamily: 'Crimson Text'
}