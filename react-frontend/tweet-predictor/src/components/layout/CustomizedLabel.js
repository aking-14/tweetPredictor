import React from 'react';
import {Text} from 'recharts';

export default class CustomizedLabel extends React.Component{
    render () {
        return <Text x={this.props.legend[3]} y={this.props.legend[4]}>{`${this.props.legend[0]} ${this.props.legend[2]} Count: ${this.props.legend[1]}`}</Text>;
    }
}