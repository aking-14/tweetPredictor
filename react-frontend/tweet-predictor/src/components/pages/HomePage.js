import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class HomePage extends Component {
    render (){
        return (
            <React.Fragment>
                <Row>
                    <Col style={{paddingRight: '0', paddingLeft: '0'}}>
                        <div className="pictureContainer" style={s}>
                            <img 
                                src="/images/doge.png"
                                style={pictureStyle}
                                alt=""
                            />
                        </div>
                        <div style={t}>
                            <h1 style={{textAlign: 'center', color: 'white', paddingTop: '250px', fontSize: '90px'}}>tweet-predictor</h1>
                            
                        </div>
                        <div style={t}>
                            <h2 style={{textAlign: 'center', color: 'white', paddingTop: '50px', fontSize:'60px'}}>Pet Adoption From Nose To Toes</h2>
                        </div>
                        <div style={t}>
                            <h2 style={{textAlign: 'center', color: 'white'}}>Transforming Organizations, Animals, and People.</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h1>We Take Animal Care Seriously</h1>
                </Row>
            </React.Fragment>
        )
    }
}
const s = {
    position: 'absolute'
}

const t = {
    opacity: 0.99
}
const pictureStyle = {
    verticalAlign: 'bottom',
    backgroundImage: 'images/doge.jpg',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0.00% 10.30%',
    backgroundSize: '100%',
    backgroundColor: 'transparent',
    maxWidth: '100%'
}

export default HomePage;
