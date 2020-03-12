import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class HomePage extends Component {
    render (){
        return (
            <React.Fragment>
                <Row>
                    <h1>Welcome to Tweet Predictor!</h1>
                </Row>
            </React.Fragment>
        )
    }
}

export default HomePage;
