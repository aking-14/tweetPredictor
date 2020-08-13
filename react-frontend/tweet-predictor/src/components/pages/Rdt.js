import React, {Component} from 'react';
import CustomizedTitle from '../layout/CustomizedTitle';
import CustomizedLabel from '../layout/CustomizedLabel';
import cleanData from '../layout/Helpers';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, Label } from 'recharts';
import { Row } from 'react-bootstrap';

export default class Rdt extends Component {
    state = {
        spinning: true
    }

    componentDidMount(){
        fetch('/add_wh', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.props)
        }).then(response => {
            if (!response.ok){
                throw new Error('Network response was not ok')
            }
            //return response.clone().blob()
            return response.json()
        }).then(r => {
            this.setState(cleanData(r), this.changeBol());
        })
    }
    
    changeBol = () => {
        this.setState({spinning: false})
    }

    render(){

        if (this.state.spinning){
            return null;
        }

        return (
            <React.Fragment>
                <Row>
                    <LineChart width={700} height={300} data={this.state.data}
                        margin={{top: 30, right: 15, bottom: 30}}
                    >
                        <XAxis dataKey="name">
                            <Label content={<CustomizedTitle legend={['7 Day Donald Trump Rolling Tweet Count', 175, 20]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.max, 'Max', 85, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.min, 'Min', 275, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.cur, 'Current', 465, 290]} />} />
                        </XAxis>
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Line type="monotone" dataKey="3 Month MA" stroke="#8884d8" />
                        <Line type="monotone" dataKey="VAH" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="VAL" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Actual Count" stroke="#050d08" />
                    </LineChart>
                    <LineChart width={700} height={300} data={this.state.fixedData}
                        margin={{top: 30, left: 10, bottom: 30, right: 10}}
                    >
                        <XAxis dataKey="name">
                            <Label content={<CustomizedTitle legend={['7 Day Donald Trump Fixed Tweet Count', 175, 20]} />} />
                            <Label content={<CustomizedLabel legend={['Weekly', this.state.maxWk, 'Max', 85, 290]} />} />
                            <Label content={<CustomizedLabel legend={['Weekly', this.state.minWk, 'Min', 275, 290]} />} />
                            <Label content={<CustomizedLabel legend={['Weekly', this.state.curWk, 'Current', 465, 290]} />} />
                        </XAxis>
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Line type="monotone" dataKey="Projected Count" stroke="#8884d8" />
                        <Line type="monotone" dataKey="Projected VAH" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Projected VAL" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Cumulative Count" stroke="#050d08" />
                        <Line type="monotone" dataKey="Current VAH" stroke="#ff4d4d" />
                        <Line type="monotone" dataKey="Current VAL" stroke="#ff4d4d" />
                    </LineChart>
                </Row>
                <Row>
                    <LineChart width={700} height={300} data={this.state.hourlyData}
                        margin={{top: 50, bottom: 30, right: 15}}
                    >
                        <XAxis dataKey="name">
                            <Label content={<CustomizedTitle legend={['24 Hour Donald Trump Rolling Tweet Count', 175, 40]} />} />
                            <Label content={<CustomizedLabel legend={['Past Day', this.state.legMax, 'Max', 85, 290]} />} />
                            <Label content={<CustomizedLabel legend={['Past Day', this.state.legCur, 'Actual', 275, 290]} />} />
                            <Label content={<CustomizedLabel legend={['Past Day', this.state.legMA, 'MA', 465, 290]} />} />
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
                    <LineChart width={700} height={300} data={this.state.fixedHrly}
                        margin={{top: 50, bottom: 30, left: 10, right: 10}} 
                    >
                        <XAxis dataKey="name">
                            <Label content={<CustomizedTitle legend={['24 Hour Donald Trump Fixed Tweet Count', 175, 40]} />} />
                            <Label content={<CustomizedLabel legend={['Expected Tweets Remaining For Day', this.state.expectedC, '', 225, 290]} />} />
                        </XAxis>
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Line type="monotone" dataKey="Projected Count" stroke="#8884d8" />
                        <Line type="monotone" dataKey="Projected VAH" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Projected VAL" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Cumulative Count" stroke="#050d08" />
                    </LineChart>
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