import React from 'react'

export default class About extends React.Component {
    render(){
        return (
            <div className="about-row">
                <div className="about-column" style={{textAlign: 'center'}}>
                    <h1 style={{padding: '10px'}}>TweetPredictor</h1>
                    <h5>Tweet Predictor is a web app that tries to correctly predict the tweet count each week for four tweet markets:</h5>
                    <ul>
                        <li style={{listStyle: 'none', fontSize: '1.25rem'}}>Donald Trump <i>@realDonaldTrump</i></li>
                        <li style={{listStyle: 'none', fontSize: '1.25rem'}}>White House <i>@WhiteHouse</i></li>
                        <li style={{listStyle: 'none', fontSize: '1.25rem'}}>Joe Biden <i>@JoeBiden</i></li>
                        <li style={{listStyle: 'none', fontSize: '1.25rem'}}>Mike Pence <i>@Mike_Pence</i></li>
                    </ul>
                    <h5>- Graphs visualize tweet counts that have happened within the past week or 24 hours.</h5>
                    <h5>- Expected tweets remaining are the values that best predict how many tweets the account will have for the rest of the week or day.</h5> 
                    <h5>- All data is updated every ~20 minutes.</h5>
                </div>
                <div className="about-column">
                    <h1>Example:</h1>
                </div>
            </div>
        )
    }
}