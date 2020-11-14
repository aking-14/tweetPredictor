import React, {Component} from 'react';
import CustomizedTitle from '../layout/CustomizedTitle';
import CustomizedLabel from '../layout/CustomizedLabel';
import {cleanData} from '../layout/Helpers';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, Label, ResponsiveContainer } from 'recharts';
import { Row } from 'react-bootstrap';
import logo from '../../images/bidenPic.jpg'

export default class Jb extends Component {
    constructor(props){
        super(props)
        this.state = {
            spinning: true
        }
    }

    componentDidMount(){
        this.getApi()
        this.timerVar = setInterval(() => this.getApi(), 1080*1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerVar)
    }

    async getApi() {
        try{
            let response = await fetch('/add_seq', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.props)
            })
            if (!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }else{
                let r = await response.json()
                this.setState(cleanData(r), this.changeBol())
            }
        }catch(e){
            console.log(e)
        }
    }
    
    changeBol = () => {
        this.setState({spinning: false})
    }

    renderLegend = (value) => {
        return <span style={{fontSize: 14}}>{value}</span>
    }

    render(){

        if (this.state.spinning){
            return null;
        }

        return (
            <React.Fragment>
                <div className="rowTweet">
                    <div className="columnTweet">
                        <span style={{fontSize: '24px'}}>
                            Expected Tweets Remaining for Day: 
                            <span style={statStyle}>
                                {this.state.expectedC}
                            </span>
                        </span>
                    </div>
                    <div className="columnTweet">
                        <img className="imgs" src={logo} alt="logo"/>
                    </div>
                    <div className="columnTweet">
                        <span style={{fontSize: '24px'}}>
                            Expected Tweets Remaining for Week: 
                            <span style={curStyle}>
                                {this.state.expectedW}
                            </span>
                        </span>
                    </div>
                </div>
                <hr />
                <Row className="market-spacing-top">
                    <ResponsiveContainer height={300}>
                        <LineChart data={this.state.data}
                            margin={{top: 50, right: 20, bottom: 30}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['7 Day Joe Biden Rolling Tweet Count', 175, 20]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.max, 'Max', 290, 15]} />} /> {/*Use case for redux state*/}
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.min, 'Min', 290, 2.3]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.cur, 'Current', 290, 1.2]} />} />
                            </XAxis>
                            <YAxis />
                            <Legend />
                            <Tooltip />
                            <Line type="monotone" dataKey="3 Month MA" stroke="#8884d8" />
                            <Line type="monotone" dataKey="VAH" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="VAL" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Actual Count" stroke="#050d08" />
                        </LineChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer height={300} className="chart-space">
                        <LineChart data={this.state.fixedData}
                            margin={{top: 50, left: 10, bottom: 30, right: 20}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['7 Day Joe Biden Fixed Tweet Count', 175, 20]} />} />
                                <Label content={<CustomizedLabel legend={['Weekly', 'Wk.', this.state.maxWk, 'Max', 290, 10]} />} />
                                <Label content={<CustomizedLabel legend={['Weekly', 'Wk.', this.state.minWk, 'Min', 290, 2.05]} />} />
                                <Label content={<CustomizedLabel legend={['Weekly', 'Wk.', this.state.curWk, 'Current', 290, 1.175]} />} />
                            </XAxis>
                            <YAxis />
                            <Legend formatter={this.renderLegend} wrapperStyle={{left: 40}}/>
                            <Tooltip />
                            <Line type="monotone" dataKey="Projected Count" stroke="#8884d8" />
                            <Line type="monotone" dataKey="Projected VAH" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Projected VAL" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Cumulative Count" stroke="#050d08" />
                            <Line type="monotone" dataKey="Current VAH" stroke="#ff4d4d" />
                            <Line type="monotone" dataKey="Current VAL" stroke="#ff4d4d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Row>
                <Row className="market-spacing-bottom">
                    <ResponsiveContainer height={300}>
                        <LineChart data={this.state.hourlyData}
                            margin={{top: 50, bottom: 30, right: 20}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['24 Hour Joe Biden Rolling Tweet Count', 175, 40]} />} />
                                <Label content={<CustomizedLabel legend={['Past Day', 'P. D.', this.state.legMax, 'Max', 290, 12]} />} />
                                <Label content={<CustomizedLabel legend={['Past Day', 'P. D.', this.state.legCur, 'Actual', 290, 2.15]} />} />
                                <Label content={<CustomizedLabel legend={['Past Day', 'P. D.', this.state.legMA, 'MA', 290, 1.15]} />} />
                            </XAxis>
                            <YAxis />
                            <Legend />
                            <Tooltip />
                            <Line type="monotone" dataKey="3 Month MA" stroke="#8884d8" />
                            <Line type="monotone" dataKey="VAH" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="VAL" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Max" stroke="#ff4d4d" />
                            <Line type="monotone" dataKey="Min" stroke="#ff4d4d" />
                            <Line type="monotone" dataKey="Current" stroke="#050d08" />
                        </LineChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer height={300} className="chart-space">
                        <LineChart data={this.state.fixedHrly}
                            margin={{top: 50, bottom: 30, left: 10, right: 20}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['24 Hour Joe Biden Fixed Tweet Count', 175, 40]} />} />
                                <Label content={<CustomizedLabel legend={['Expected Tweets Remaining For Day', 'Expected Tweets Remaining For Day', this.state.expectedC, '', 290, 2.5964]} />} />
                            </XAxis>
                            <YAxis />
                            <Legend />
                            <Tooltip />
                            <Line type="monotone" dataKey="Projected Count" stroke="#8884d8" />
                            <Line type="monotone" dataKey="Projected VAH" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Projected VAL" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Cumulative Count" stroke="#050d08" />
                        </LineChart>
                    </ResponsiveContainer>
                </Row>
            </React.Fragment>
        )
    }
}

const statStyle = {
    paddingRight: 3,
    paddingLeft: 3,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#4bb272',
    color: '#333',
    display: 'inline-block',
    fontFamily: 'Crimson Text',
    fontSize: 24,
    textAlign: 'center',
    borderStyle: 'solid'
}

const curStyle = {
    paddingRight: 3,
    paddingLeft: 3,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#4bb272',
    color: '#333',
    display: 'inline-block',
    fontFamily: 'Crimson Text',
    fontSize: 24,
    textAlign: 'center',
    borderStyle: 'solid'
}