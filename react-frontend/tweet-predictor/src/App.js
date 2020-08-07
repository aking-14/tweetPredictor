import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import HomePage from './components/pages/HomePage'
import Whitehouse from './components/pages/Whitehouse'
import Rdt from './components/pages/Rdt'
import Potus from './components/pages/Potus'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {tweetInfo: 2}
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container" style={classStyle}>
            <Route exact path="/" render={ () => 
              <HomePage /> 
            } />
            <Route path="/rdt" component={Rdt} />
            <Route path="/wh" component={Whitehouse} />
            <Route path="/potus" component={Potus} />
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

export default App;
