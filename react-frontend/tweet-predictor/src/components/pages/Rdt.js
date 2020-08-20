import React, {Component} from 'react';
import CustomizedTitle from '../layout/CustomizedTitle';
import CustomizedLabel from '../layout/CustomizedLabel';
import {cleanData} from '../layout/Helpers';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, Label, ResponsiveContainer } from 'recharts';
import { Row } from 'react-bootstrap';

export default class Rdt extends Component {
    state = {
        spinning: true
    }

    componentDidMount(){
        fetch('/add_seq', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.props)
        }).then(response => {
            if (!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json()
        }).then(r => {
            this.setState(cleanData(r), this.changeBol());
        })
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
                <Row>
                    <div>
                        <span style={{fontSize: 0}}>i</span>
                    </div>
                </Row>
                <Row>
                    <ResponsiveContainer height={300}>
                        <LineChart data={this.state.data}
                            margin={{top: 50, right: 20, bottom: 30}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['7 Day Donald Trump Rolling Tweet Count', 175, 20]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.max, 'Max', 290, 7.75]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.min, 'Min', 290, 2.3964]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.cur, 'Current', 290, 1.43]} />} />
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
                    <ResponsiveContainer height={300}>
                        <LineChart data={this.state.fixedData}
                            margin={{top: 50, left: 10, bottom: 30, right: 20}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['7 Day Donald Trump Fixed Tweet Count', 175, 20]} />} />
                                <Label content={<CustomizedLabel legend={['Weekly', 'Weekly', this.state.maxWk, 'Max', 290, 7.75]} />} />
                                <Label content={<CustomizedLabel legend={['Weekly', 'Weekly', this.state.minWk, 'Min', 290, 2.05]} />} />
                                <Label content={<CustomizedLabel legend={['Weekly', 'Weekly', this.state.curWk, 'Current', 290, 1.2]} />} />
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
                <Row>
                    <ResponsiveContainer height={300}>
                        <LineChart data={this.state.hourlyData}
                            margin={{top: 50, bottom: 30, right: 20}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['24 Hour Donald Trump Rolling Tweet Count', 175, 40]} />} />
                                <Label content={<CustomizedLabel legend={['Past Day', 'Past Day', this.state.legMax, 'Max', 290, 7.75]} />} />
                                <Label content={<CustomizedLabel legend={['Past Day', 'Past Day', this.state.legCur, 'Actual', 290, 2.05]} />} />
                                <Label content={<CustomizedLabel legend={['Past Day', 'Past Day', this.state.legMA, 'MA', 290, 1.15]} />} />
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
                    <ResponsiveContainer height={300}>
                        <LineChart data={this.state.fixedHrly}
                            margin={{top: 50, bottom: 30, left: 10, right: 20}} 
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['24 Hour Donald Trump Fixed Tweet Count', 175, 40]} />} />
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
                <Row>
                    <div>
                        <span style={{fontSize: 0}}>i</span>
                    </div>
                </Row>
            </React.Fragment>
        )
    }
}