import React from 'react';
import {Text} from 'recharts';

export default class CustomizedTitle extends React.Component {
    render () {
        return (
                <Text x={this.props.viewBox['width']/3.76}/*x={this.props.legend[1]}*/ y={this.props.legend[2]} className='chart-title'/*style={{fontSize: fontS, textAlign: 'center'}}*/>{this.props.legend[0]}</Text>
        )
    }
}