import React from 'react';
import {Text} from 'recharts';

export default class CustomizedLabel extends React.Component{
    render () {
        var fontS, ind
        if (this.props.viewBox['width'] > 585){
            fontS = 16
            ind = 0
        }else if (this.props.viewBox['width'] > 490){
            fontS = 16
            ind = 1
        }else if (this.props.viewBox['width'] >  410){
            fontS = 14
            ind = 1
        }else{
            fontS = 12
            ind = 1
        }
        return <Text x={this.props.viewBox['width']/this.props.legend[5]} y={this.props.legend[4]} style={{fontSize: fontS}}>{`${this.props.legend[ind]} ${this.props.legend[3]} Count: ${this.props.legend[2]}`}</Text>;
    }
}