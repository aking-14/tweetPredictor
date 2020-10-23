import React from 'react';
import us from '../../images/uncleSam.png'
import tl from '../../images/twitterLogo.png'
import UserForm from '../layout/UserForm'

export default class GuestHomePage extends React.Component {
    
    activeUser = (d) => {
        this.props.activeUser(d)
    }

    render (){
        return (
            <div className="rowTweet">
                <div className="column">
                    <div style={{textAlign: 'center'}}>
                        <img className="imgs" src={tl} alt="tl"/>
                    </div>
                    <h1 style={{textAlign: 'center'}}>Welcome to Tweet Predictor!</h1>
                    <h3 style={{textAlign: 'center'}}>Tweet Predictor is your <b>premiere</b> destination for predicting the number of times government officials will tweet each week.</h3>
                </div>
                <div className="column">
                    <div style={{textAlign: 'center'}}>
                        <img className="imgs" src={us} alt="us" />
                    </div>
                    <h1 style={{textAlign: 'center'}}>Are you ready to learn more?</h1>
                    <h3 style={{textAlign: 'center'}}>Sign up (<b><i>it's free</i></b>) or visit our <a href="/about">about</a> page for a more detailed explanation of how everything works.</h3>
                    <UserForm {...{'style':'loginForm'}} activeUser={this.activeUser}/>
                </div>
            </div>
        )
    }
}
