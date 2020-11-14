import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Whitehouse from './components/pages/Whitehouse'
import Rdt from './components/pages/Rdt'
import Jb from './components/pages/Jb'
import Mp from './components/pages/Mp'
import Profile from './components/pages/Profile'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import About from './components/pages/About'
import ActiveUser from './components/layout/ActiveUser'
import GuestUser from './components/layout/GuestUser'
import UserHomePage from './components/pages/UserHomePage'
import GuestHomePage from './components/pages/GuestHomePage'
import { PrivateRoute } from './components/pages/PrivateRoute'
import { PrivateRouteLogin } from './components/pages/PrivateRouteLogin'
//import HomePage from './components/pages/HomePage'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
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
        r.valid ? this.setState({login: true, userName: r.userName}) : this.setState({login: false});
      }
    }catch(e){
      console.log(e)
    }
  }

  activeUser = (d) => {
    this.setState({login: d['login'], userName: d['username']})
  }

  userLogout = (d) => {
    this.setState({login: d['login'], userName: d['userName']})
  }

  render() {
    if (this.state.login === undefined){
      return null
    }
    //maybe add spinning in here?
    return (
      <Router>
        <div className="App">
          { (this.state.login) ? <ActiveUser {...this.state} userLogout={this.userLogout} /> : <GuestUser /> }
          <div className="container" style={classStyle}>
            <Route exact path="/" render={ () => this.state.login ?  <UserHomePage /> : <GuestHomePage activeUser={this.activeUser} />} />
            {/*<Route exact path="/" render={ () => <HomePage {...this.state} activeUser={this.activeUser}/> } />*/}
            {/*<Route path="/rdt" render={(props) => <AuthenticateRdt {...props} /> } />*/}
            {/*<Route path="/rdt" render={() => this.state.login ? <Rdt seq={1} /> : <Redirect to="/" /> } />*/}
            {/*<Route path="/wh" render={() => <Whitehouse seq={2} />} />*/}
            <PrivateRoute component={Rdt} path="/rdt" exact {...this.state} seq={1} />
            <PrivateRoute component={Whitehouse} path="/wh" exact {...this.state} seq={2} />
            <PrivateRoute component={Jb} path="/jb" exact {...this.state} seq={3} />
            <PrivateRoute component={Mp} path="/mp" exact {...this.state} seq={4} />
            <Route path="/profile" render={() => this.state.login ? <Profile {...this.state} activeUser={this.activeUser} /> : <Redirect to="/" />} />
            <PrivateRouteLogin component={Login} path="/login" exact {...this.state} activeUser={this.activeUser} />
            <PrivateRouteLogin component={Signup} path="/signup" exact {...this.state} activeUser={this.activeUser} />
            {/*<Route path="/login" render={(props) => <Login {...props} activeUser={this.activeUser}/>} />*/}
            {/*<Route path="/signup" render={(props) => <Signup {...props} activeUser={this.activeUser}/>} />*/}
            <Route path="/about" render={() => this.state.login ? <Redirect to="/" /> : <About />} />
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