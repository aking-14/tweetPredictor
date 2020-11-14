import React from 'react'
import abImg1 from  '../../images/aboutImg1.png'
import abImg2 from  '../../images/aboutImg2.png'

export default class About extends React.Component {
    render(){
        return (
            <div className="about-row">
                <div className="about-top-column">
                    <h1 style={{padding: '10px'}}>TweetPredictor</h1>
                </div>
                <div className="about-column">
                    <h1 style={{padding: '10px'}}>Notes:</h1>
                    <h5>Tweet Predictor is a web app that tries to correctly predict the tweet count each week for four tweet markets:</h5>
                    <ul>
                        <li style={{listStyle: 'none', fontSize: '1.25rem'}}>Donald Trump <i>@realDonaldTrump</i></li>
                        <li style={{listStyle: 'none', fontSize: '1.25rem'}}>White House <i>@WhiteHouse</i></li>
                        <li style={{listStyle: 'none', fontSize: '1.25rem'}}>Joe Biden <i>@JoeBiden</i></li>
                        <li style={{listStyle: 'none', fontSize: '1.25rem'}}>Mike Pence <i>@Mike_Pence</i></li>
                    </ul>
                    <ul style={{textAlign: 'left', listStyleType: 'square'}}>
                        <li style={{fontSize: '1.25rem'}}>Graphs visualize tweet counts that have happened within the past week or 24 hours.</li>
                        <li style={{fontSize: '1.25rem'}}>MA = Moving Average. The moving average is calculated using tweet data from the past three months.</li>
                        <li style={{fontSize: '1.25rem'}}>The value area is where the tweet count is expected to land 70% of the time. The range of the value area is equal to VAH minus VAL.</li>
                        <li style={{fontSize: '1.25rem'}}>VAH = Value Area High. The value area high is the top range of the value area. VAH is calculated by taking the average of all the tweets that occur above the moving average.</li>
                        <li style={{fontSize: '1.25rem'}}>VAL = Value Area Low. The value area low is the bottom range of the value area. VAL is calculated by taking the average of all the tweets that occur below the moving average.</li>
                        <li style={{fontSize: '1.25rem'}}>All data is updated every ~20 minutes.</li>
                    </ul>
                </div>
                <div className="about-column">
                    <h1>Examples:</h1>
                    <div>
                        <img className="about-img" src={abImg1} alt="graph1"/>
                    </div>
                    <div>
                        <img className="about-img" src={abImg2} alt="graph2"/>
                    </div>
                </div>
            </div>
        )
    }
}