import React, { Component } from 'react';
import CustomizedTitle from '../layout/CustomizedTitle';
import CustomizedLabel from '../layout/CustomizedLabel';
import {cleanHomeData} from '../layout/Helpers';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip, Label } from 'recharts';
import { Row } from 'react-bootstrap';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spinning: true
        }
    }

    componentDidMount(){
        this.getApi()
        this.timerVar = setInterval(() => this.getApi(), 1080 * 1000) //fetches every 18 mins
    }

    componentWillUnmount(){
        clearInterval(this.timerVar)
    }

    async getApi(){
        try {
            let res = await fetch('/add_all');

            if (!res.ok){
                throw new Error(`HTTP error! Status: ${res.status}`);
            }else{
                let r = await res.json();
                this.setState(cleanHomeData(r), this.changeBol())
            }
        }catch(e){
            console.log(e)
        }
        /*
        fetch('/add_all', {
        }).then(res => res.json()).then(r => {
            this.setState(cleanHomeData(r), this.changeBol())
        });
        */
    }

    changeBol = () => {
        this.setState({spinning: false})
    }

    

    render (){
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
                            margin={{top: 30, right: 20, bottom: 30}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['7 Day Whitehouse Rolling Tweet Count', 175, 20]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.maxWh, 'Max', 290, 15]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.minWh, 'Min', 290, 2.3]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.curWh, 'Current', 290, 1.3]} />} />
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
                        <LineChart data={this.state.rdtData}
                            margin={{top: 30, left: 10, bottom: 30, right: 20}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['7 Day Donald Trump Rolling Tweet Count', 175, 20]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.maxRdt, 'Max', 290, 15]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.minRdt, 'Min', 290, 2.3]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.curRdt, 'Current', 290, 1.3]} />} />
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
                </Row>
                <Row>
                    <ResponsiveContainer height={300}>
                        <LineChart data={this.state.jbData}
                            margin={{top: 30, bottom: 30, right: 20}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['7 Day Joe Biden Rolling Tweet Count', 175, 20]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.maxJb, 'Max', 290, 15]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.minJb, 'Min', 290, 2.3]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.curJb, 'Current', 290, 1.3]} />} />
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
                        <LineChart data={this.state.mpData}
                            margin={{top: 30, left: 10, bottom: 30, right: 20}}
                        >
                            <XAxis dataKey="name">
                                <Label content={<CustomizedTitle legend={['7 Day Mike Pence Rolling Tweet Count', 175, 20]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.maxMp, 'Max', 290, 15]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.minMp, 'Min', 290, 2.3]} />} />
                                <Label content={<CustomizedLabel legend={[this.state.day, this.state.abbv, this.state.curMp, 'Current', 290, 1.3]} />} />
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
                </Row>
            </React.Fragment>
        )
    }
}
//can pass color from other page as props or set as state from db
/*
const statStyle = {
    paddingRight: 3,
    paddingLeft: 3,
    marginLeft: 5,
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: '#ffde00',
    color: '#333',
    display: 'inline-block',
    fontFamily: 'Crimson Text',
    fontSize: 14,
    textAlign: 'center',
    borderStyle: 'solid',
    position: 'relative'
}

const curStyle = {
    paddingRight: 3,
    paddingLeft: 3,
    marginLeft: 5,
    marginBottom: 5,
    marginRight: 5,
    backgroundColor: '#4bb272',
    color: '#333',
    display: 'inline-block',
    fontFamily: 'Crimson Text',
    fontSize: 14,
    textAlign: 'center',
    borderStyle: 'solid',
    position: 'relative'
}
*/

export default HomePage;
