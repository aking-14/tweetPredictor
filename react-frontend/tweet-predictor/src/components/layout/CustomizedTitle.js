import React from 'react';
import {Text} from 'recharts';

export default class CustomizedTitle extends React.Component {
    
    render () {
        return <Text x={this.props.legend[1]} y={this.props.legend[2]} style={{fontSize: 24}}>{this.props.legend[0]}</Text>;
    }
}