import React, { Component } from 'react';
import CustomizedTitle from '../layout/CustomizedTitle';
import CustomizedLabel from '../layout/CustomizedLabel';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, Label } from 'recharts';
import { Row } from 'react-bootstrap';
import Moment from 'moment';
import 'moment-timezone';

export class HomePage extends Component {
    state = {
        data: [],
        rdtData: [],
        jbData: [],
        mpData: [],
        day: '',
        maxWh: 0,
        minWh: 0,
        curWh: 0,
        maxRdt: 0,
        minRdt: 0,
        curRdt: 0,
        maxJb: 0,
        minJb: 0,
        curJb: 0,
        maxMp: 0,
        minMp: 0,
        curMp: 0,
        spinning: true
    }

    componentDidMount(){
        fetch('/add_all', {
        }).then(res => res.json()).then(r => {
            const tDay = Moment().tz('America/New_York').format('dddd');
            const yDay1 = Moment().tz('America/New_York').subtract(1, 'days').format('dddd');
            const yDay2 = Moment().tz('America/New_York').subtract(2, 'days').format('dddd');
            const yDay3 = Moment().tz('America/New_York').subtract(3, 'days').format('dddd');
            const yDay4 = Moment().tz('America/New_York').subtract(4, 'days').format('dddd');
            const yDay5 = Moment().tz('America/New_York').subtract(5, 'days').format('dddd');
            const yDay6 = Moment().tz('America/New_York').subtract(6, 'days').format('dddd');

            const newDataWh = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};
            const realDataWh = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
            const curDataWh = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
            
            const newDataRdt = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};            
            const realDataRdt = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
            const curDataRdt = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
            
            const newDataJb = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};
            const realDataJb = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
            const curDataJb = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
            
            const newDataMp = {'Sunday': [], 'Monday': [], 'Tuesday': [], 'Wednesday': [], 'Thursday': [], 'Friday': [], 'Saturday': []};
            const realDataMp = {[yDay6]: [], [yDay5]: [], [yDay4]: [], [yDay3]: [], [yDay2]: [], [yDay1]: [], [tDay]: []};
            const curDataMp = {[yDay6]: 0, [yDay5]: 0, [yDay4]: 0, [yDay3]: 0, [yDay2]: 0, [yDay1]: 0, [tDay]: 0};
            
            var srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
            const srtDtFxd = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
            var endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
            var begStp = Moment().tz('America/New_York').subtract(6, 'days').format('MM-DD-YYYY');
            var stpDt = Moment().tz('America/New_York').format('MM-DD-YYYY');
            
            var rnge = 1;
            var gate = true;

            r[0].map(x => {
                let cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
                let k = '';
                let l = '';
                
                if (cur_dt >= begStp && cur_dt <= stpDt){
                    l = Moment.parseZone(x.dates).format('dddd');
                    curDataWh[l] = curDataWh[l] + 1;
                }

                if (cur_dt >= srtDt && cur_dt < endDt && gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    if (rnge !== newDataWh[k].length){
                        let pl = rnge - newDataWh[k].length
                        while (pl > 1){
                            newDataWh[k].push(0)
                            pl = rnge - newDataWh[k].length
                        }
                        newDataWh[k].push(1);
                    }else{
                        newDataWh[k][newDataWh[k].length - 1] = newDataWh[k][newDataWh[k].length - 1] + 1;
                    }
                }else{
                    if (cur_dt >= srtDtFxd){
                        if (gate){
                            k = Moment.parseZone(x.dates).format('dddd');
                            srtDt = endDt;
                            endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                            if (endDt > stpDt){
                                gate = !gate;
                            }else{
                                newDataWh[k].push(1);
                                rnge = rnge + 1;
                            }
                        }
                    }
                }
                return newDataWh;
            })

            srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
            endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');

            rnge = 1;
            gate = true;
            
            r[1].map(x => {
                let cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
                let k = '';
                let l = '';
                
                if (cur_dt >= begStp && cur_dt <= stpDt){
                    l = Moment.parseZone(x.dates).format('dddd');
                    curDataRdt[l] = curDataRdt[l] + 1;
                }

                if (cur_dt >= srtDt && cur_dt < endDt && gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    if (rnge !== newDataRdt[k].length){
                        let pl = rnge - newDataRdt[k].length
                        while (pl > 1){
                            newDataRdt[k].push(0)
                            pl = rnge - newDataRdt[k].length
                        }
                        newDataRdt[k].push(1);
                    }else{
                        newDataRdt[k][newDataRdt[k].length - 1] = newDataRdt[k][newDataRdt[k].length - 1] + 1;
                    }
                }else{
                    if (cur_dt >= srtDtFxd){
                        if (gate){
                            k = Moment.parseZone(x.dates).format('dddd');
                            srtDt = endDt;
                            endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                            if (endDt > stpDt){
                                gate = !gate;
                            }else{
                                newDataRdt[k].push(1);
                                rnge = rnge + 1;
                            }
                        }
                    }
                }
                return newDataRdt;
            })

            srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
            endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');

            rnge = 1;
            gate = true;
            
            r[2].map(x => {
                let cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
                let k = '';
                let l = '';
                
                if (cur_dt >= begStp && cur_dt <= stpDt){
                    l = Moment.parseZone(x.dates).format('dddd');
                    curDataJb[l] = curDataJb[l] + 1;
                }

                if (cur_dt >= srtDt && cur_dt < endDt && gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    if (rnge !== newDataJb[k].length){
                        let pl = rnge - newDataJb[k].length
                        while (pl > 1){
                            newDataJb[k].push(0)
                            pl = rnge - newDataJb[k].length
                        }
                        newDataJb[k].push(1);
                    }else{
                        newDataJb[k][newDataJb[k].length - 1] = newDataJb[k][newDataJb[k].length - 1] + 1;
                    }
                }else{
                    if (cur_dt >= srtDtFxd){
                        if (gate){
                            k = Moment.parseZone(x.dates).format('dddd');
                            srtDt = endDt;
                            endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                            if (endDt > stpDt){
                                gate = !gate;
                            }else{
                                newDataJb[k].push(1);
                                rnge = rnge + 1;
                            }
                        }
                    }
                }
                return newDataJb;
            })

            srtDt = Moment().tz('America/New_York').subtract(84, 'days').format('MM-DD-YYYY');
            endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');

            rnge = 1;
            gate = true;
            
            r[3].map(x => {
                let cur_dt = Moment.parseZone(x.dates).format('MM-DD-YYYY');
                let k = '';
                let l = '';
                
                if (cur_dt >= begStp && cur_dt <= stpDt){
                    l = Moment.parseZone(x.dates).format('dddd');
                    curDataMp[l] = curDataMp[l] + 1;
                }

                if (cur_dt >= srtDt && cur_dt < endDt && gate){
                    k = Moment.parseZone(x.dates).format('dddd');
                    if (rnge !== newDataMp[k].length){
                        let pl = rnge - newDataMp[k].length
                        while (pl > 1){
                            newDataMp[k].push(0)
                            pl = rnge - newDataMp[k].length
                        }
                        newDataMp[k].push(1);
                    }else{
                        newDataMp[k][newDataMp[k].length - 1] = newDataMp[k][newDataMp[k].length - 1] + 1;
                    }
                }else{
                    if (cur_dt >= srtDtFxd){
                        if (gate){
                            k = Moment.parseZone(x.dates).format('dddd');
                            srtDt = endDt;
                            endDt = Moment(srtDt).tz('America/New_York').add(7, 'days').format('MM-DD-YYYY');
                            if (endDt > stpDt){
                                gate = !gate;
                            }else{
                                newDataMp[k].push(1);
                                rnge = rnge + 1;
                            }
                        }
                    }
                }
                return newDataMp;
            })

            for (const v in newDataWh){
                let curDy = Moment().tz('America/New_York').format('dddd')
                if (curDy === v){
                    var maxWh = Math.max(...newDataWh[v])
                    var minWh = Math.min(...newDataWh[v])
                    var curWh = curDataWh[v]

                    var maxRdt = Math.max(...newDataRdt[v])
                    var minRdt = Math.min(...newDataRdt[v])
                    var curRdt = curDataRdt[v]

                    var maxJb = Math.max(...newDataJb[v])
                    var minJb = Math.min(...newDataJb[v])
                    var curJb = curDataJb[v]

                    var maxMp = Math.max(...newDataMp[v])
                    var minMp = Math.min(...newDataMp[v])
                    var curMp = curDataMp[v]
                }
                realDataWh[v].push(Math.round(newDataWh[v].reduce((acc,c) => acc + c)/newDataWh[v].length));
                let vahArr = newDataWh[v].filter(i => i >= realDataWh[v][0]);
                let vah = Math.round(vahArr.reduce((acc,c) => acc + c)/vahArr.length)
                realDataWh[v].push(vah);
                let valArr = newDataWh[v].filter(i => i <= realDataWh[v][0]);
                let val = Math.round(valArr.reduce((acc,c) => acc + c)/valArr.length)
                realDataWh[v].push(val);

                realDataRdt[v].push(Math.round(newDataRdt[v].reduce((acc,c) => acc + c)/newDataRdt[v].length));
                let vahArrRdt = newDataRdt[v].filter(i => i >= realDataRdt[v][0]);
                let valArrRdt = newDataRdt[v].filter(i => i <= realDataRdt[v][0]);
                let valRdt = Math.round(valArrRdt.reduce((acc,c) => acc + c)/valArrRdt.length)
                if (vahArrRdt.length === 1){
                    let vahRdt = valRdt + realDataRdt[v][0]
                    realDataRdt[v].push(vahRdt);
                }else{
                    let vahRdt = Math.round(vahArrRdt.reduce((acc,c) => acc + c)/vahArrRdt.length)
                    realDataRdt[v].push(vahRdt);    
                }
                realDataRdt[v].push(valRdt);

                realDataJb[v].push(Math.round(newDataJb[v].reduce((acc,c) => acc + c)/newDataJb[v].length));
                let vahArrJb = newDataJb[v].filter(i => i >= realDataJb[v][0]);
                let vahJb = Math.round(vahArrJb.reduce((acc,c) => acc + c)/vahArrJb.length)
                realDataJb[v].push(vahJb);
                let valArrJb = newDataJb[v].filter(i => i <= realDataJb[v][0]);
                let valJb = Math.round(valArrJb.reduce((acc,c) => acc + c)/valArrJb.length)
                realDataJb[v].push(valJb);

                realDataMp[v].push(Math.round(newDataMp[v].reduce((acc,c) => acc + c)/newDataMp[v].length));
                let vahArrMp = newDataMp[v].filter(i => i >= realDataMp[v][0]);
                let vahMp = Math.round(vahArrMp.reduce((acc,c) => acc + c)/vahArrMp.length)
                realDataMp[v].push(vahMp);
                let valArrMp = newDataMp[v].filter(i => i <= realDataMp[v][0]);
                let valMp = Math.round(valArrMp.reduce((acc,c) => acc + c)/valArrMp.length)
                realDataMp[v].push(valMp);
            }

            for (const property in realDataWh){
                this.setState(prevState => {
                    return {
                        data : [...prevState.data, {name: property, '3 Month MA': realDataWh[property][0], 'VAH': realDataWh[property][1], 'VAL': realDataWh[property][2], 'Actual Count': curDataWh[property]}],
                        rdtData : [...prevState.rdtData, {name: property, '3 Month MA': realDataRdt[property][0], 'VAH': realDataRdt[property][1], 'VAL': realDataRdt[property][2], 'Actual Count': curDataRdt[property]}],
                        jbData : [...prevState.jbData, {name: property, '3 Month MA': realDataJb[property][0], 'VAH': realDataJb[property][1], 'VAL': realDataJb[property][2], 'Actual Count': curDataJb[property]}],
                        mpData : [...prevState.mpData, {name: property, '3 Month MA': realDataMp[property][0], 'VAH': realDataMp[property][1], 'VAL': realDataMp[property][2], 'Actual Count': curDataMp[property]}],
                    };
                })
            
            }
            this.setState({day: tDay, maxWh: maxWh, minWh: minWh, curWh: curWh, maxRdt: maxRdt, minRdt: minRdt, curRdt: curRdt, maxJb: maxJb, minJb: minJb, curJb: curJb, maxMp: maxMp, minMp: minMp, curMp: curMp}, this.changeBol())
        });
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
                    <LineChart width={700} height={300} data={this.state.data}
                        margin={{top: 30, right: 15, bottom: 30}}
                    >
                        <XAxis dataKey="name">
                            <Label content={<CustomizedTitle legend={['7 Day Whitehouse Rolling Tweet Count', 175, 20]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.maxWh, 'Max', 85, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.minWh, 'Min', 275, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.curWh, 'Current', 465, 290]} />} />
                        </XAxis>
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Line type="monotone" dataKey="3 Month MA" stroke="#8884d8" />
                        <Line type="monotone" dataKey="VAH" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="VAL" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Actual Count" stroke="#050d08" />
                    </LineChart>
                    <LineChart width={700} height={300} data={this.state.rdtData}
                        margin={{top: 30, left: 10, bottom: 30, right: 10}}
                    >
                        <XAxis dataKey="name">
                            <Label content={<CustomizedTitle legend={['7 Day Donald Trump Rolling Tweet Count', 175, 20]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.maxRdt, 'Max', 85, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.minRdt, 'Min', 275, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.curRdt, 'Current', 465, 290]} />} />
                        </XAxis>
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Line type="monotone" dataKey="3 Month MA" stroke="#8884d8" />
                        <Line type="monotone" dataKey="VAH" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="VAL" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Actual Count" stroke="#050d08" />
                    </LineChart>
                </Row>
                <Row>
                    <LineChart width={700} height={300} data={this.state.jbData}
                        margin={{top: 30, bottom: 30, right: 10}}
                    >
                        <XAxis dataKey="name">
                            <Label content={<CustomizedTitle legend={['7 Day Joe Biden Rolling Tweet Count', 175, 20]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.maxJb, 'Max', 85, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.minJb, 'Min', 275, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.curJb, 'Current', 465, 290]} />} />
                        </XAxis>
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Line type="monotone" dataKey="3 Month MA" stroke="#8884d8" />
                        <Line type="monotone" dataKey="VAH" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="VAL" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Actual Count" stroke="#050d08" />
                    </LineChart>
                    <LineChart width={700} height={300} data={this.state.mpData}
                        margin={{top: 30, left: 10, bottom: 30, right: 10}}
                    >
                        <XAxis dataKey="name">
                            <Label content={<CustomizedTitle legend={['7 Day Mike Pence Rolling Tweet Count', 175, 20]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.maxMp, 'Max', 85, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.minMp, 'Min', 275, 290]} />} />
                            <Label content={<CustomizedLabel legend={[this.state.day, this.state.curMp, 'Current', 465, 290]} />} />
                        </XAxis>
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Line type="monotone" dataKey="3 Month MA" stroke="#8884d8" />
                        <Line type="monotone" dataKey="VAH" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="VAL" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="Actual Count" stroke="#050d08" />
                    </LineChart>
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
