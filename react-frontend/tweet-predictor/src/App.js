import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import HomePage from './components/pages/HomePage'
import Whitehouse from './components/pages/Whitehouse'
import Rdt from './components/pages/Rdt'
import Jb from './components/pages/Jb'
import Mp from './components/pages/Mp'
import Profile from './components/pages/Profile'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import About from './components/pages/About'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      login: false,
      spinning: true
    }
  }

  componentDidMount(){
    this.getApi()
  }

  async getApi(){
    try{
      let res = await fetch('/loginsession', {credentials: 'include'});
      if (!res.ok){
        throw new Error(`HTTP Error! Status ${res.status}`);
      }else{
        let r = await res.json()
        r.valid ? this.setState({login: true, userName: r.userName}, this.changeBol()) : this.setState({login: false}, this.changeBol());
      }
    }catch(e){
      console.log(e)
    }
  }

  activeUser = (d) => {
    this.setState({login: d['login'], userName: d['username']})
  }

  changeBol = () => {
    this.setState({spinning: false})
  }

  userLogout = (d) => {
    this.setState({login: d['login'], userName: d['userName']})
  }



  render() {
    if (this.state.spinning){
      return null
    }

    return (
      <Router>
        <div className="App">
          <Header {...this.state} userLogout={this.userLogout}/>
          <div className="container" style={classStyle}>
            <Route exact path="/" render={ () => <HomePage {...this.state} activeUser={this.activeUser}/> } />
            <Route path="/rdt" render={() => <Rdt seq={1} />} />
            <Route path="/wh" render={() => <Whitehouse seq={2} />} />
            <Route path="/jb" render={() => <Jb seq={3} />} />
            <Route path="/mp" render={() => <Mp seq={4} />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/login" render={(props) => <Login {...props} activeUser={this.activeUser}/>} />
            <Route path="/signup" render={(props) => <Signup {...props} activeUser={this.activeUser}/>} />
            <Route path="/about" render={() => <About />} />
          </div>
        </div>
      </Router>
    );
  }
}

const classStyle = {
  maxWidth: '100vw',
  fontFamily: 'Crimson Text',
  backgroundColor: '#F5F8FA'
}