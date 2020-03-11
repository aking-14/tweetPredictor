import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Services from './components/pages/Services'
import HomePage from './components/pages/HomePage'
import Thanks from './components/pages/Thanks'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Logout from './components/pages/Logout'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {valid: false};
  }

  componentDidMount(){
    fetch('/loginsession', {
        credentials: 'include'
    }).then(res => res.json()).then(r => {
        if (r.valid){
            this.setState({valid: true});
        }else{
          this.setState({valid: false});
        }
    });
  }

  login = (value) => {
    this.setState({valid: value})
  }
  
  //make private route for logout
  logout = (value) => {
    this.setState({valid: value})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header activeUser={this.state.valid}/>
          <div className="container" style={classStyle}>
            <Route exact path="/" render={ () => 
              <HomePage /> //pass props here
            } />
            <Route path="/services" component={Services} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/login" render={(props) => <Login {...props} login={this.login} />} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" render={(props) => <Logout {...props} logout={this.logout} />}/>
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
