import React from 'react'
import tl from '../../images/twitterLogo.png'

export default class Login extends React.Component {
    render(){
        return (
            <div>
                <div className="rowTweet">
                    <img className="imgs" src={tl} alt="tl"/>
                </div>
                <div className="rowTweet">
                    <h2>Sign in to TweetPredictor</h2>
                </div>
            </div>
        )
    }
}