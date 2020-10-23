import React from 'react'
import UserForm from '../layout/UserForm'
import gb from '../../images/govBuilding.jpg'

export default class Signup extends React.Component {
    activeUser = (d) => {
        this.props.activeUser(d)
        this.props.history.push("/")
    }
    render(){
        return(
            <div className="login-form-row" >
                <div className="format-form">
                    <img className="imgs2" src={gb} alt="gb"/>
                </div>
                <h2 className="format-form">Join TweetPredictor today</h2>
                <UserForm {...{'style':'loginForm2'}} activeUser={this.activeUser}/>
                <p className="format-form">Already a user? <a href="/login" style={{color: 'blue'}}>Log in here.</a></p>
            </div>
        )
    }
}