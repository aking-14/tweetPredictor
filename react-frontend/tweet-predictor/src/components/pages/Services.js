import React, { Component } from 'react';
import SignUp from '../SignUp';
import Adopt from '../Adopt';
import { Row, Col } from 'react-bootstrap';

export class Services extends Component {
    state = {
        businessInfo: []
    }
 
    signUp = (contact) => {
        fetch("/add_user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        }).then(res => this.setState({ businessInfo:
            [...this.state.businessInfo, res.data]})).then(res => this.props.history.push("/thanks"));
    }
    
    render () {
        return (
            <React.Fragment>
                    <Row>
                        <Col>
                            <h2 style={topStyle}>
                                Services
                            </h2>
                        </Col>
                    </Row>
                    <Row style={{padding: '10px'}}>
                        <Col>
                            <h2 style={headerStyle}>Adoption System</h2>
                            <div style={pStyle}>
                                <div>
                                    Adopters can store pet information, keep up with docs and receive perks from our sponsors for a low annual fee.
                                </div>
                                <img 
                                    src="/images/adoptionImg.png"
                                    width="383"
                                    height="387"
                                    alt=""
                                />
                            </div>
                        </Col>
                        <Col style={{textAlign: "center"}}>
                            <h2>Pet Care System</h2>
                            <div style={pStyle}>
                                <div>
                                    Animal care organizations always have access to our organizational management service for FREE!
                                </div>
                                <img 
                                    src="/images/petCareImg.png"
                                    width="383"
                                    height="387"
                                    alt=""
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row style={{backgroundColor: '#D39E58'}}>
                    <Col>
                        <h2 style={sStyle}>
                            Animal Care Organizations-- Getting Started
                        </h2>
                        <div style={tStyle}>
                            We provide our Pet Care System to animal care organizations including shelters, rescues,  veterinarians, 
                            pet groomers, pets boarding facilities and more! Send your business information to us and we will have
                            your file processed within 3-5 business days. Click the link below to visit our registration form. 
                            In the form, you will be asked to provide your business licensing information and description of your organization.
                            Once your form has been submitted we will  contact you regarding next steps.
                        </div> 
                        <div style={bottomStyle}>
                            <SignUp signUp={this.signUp} />
                        </div>
                    </Col>
                    </Row>
                    <Row style={{backgroundColor: "#e2769f"}}>
                    <Col>
                        <h2 style={sStyle}>
                            Adopt a Pet!
                        </h2>
                        <div style={tStyle}>
                            Are you ready to adopt a pet? That is awesome! Our goal is to help connect you with the best animal for your personality
                            and lifestyle. Not sure what kind of animal will be the best fit for your home? Click the link below to take our PurrFect
                            Match quiz. 
                        </div>
                        <div style={bottomStyle}>
                            <Adopt adopt={this.adopt} />
                        </div>
                    </Col>
                    </Row>
            </React.Fragment>
        )
    }
}

const headerStyle = {
    textAlign: 'center'
}

const tStyle = {
    color: 'white',
    textAlign: 'center',
    marginRight: "20vw",
    marginLeft: "20vw",
    fontSize: '20px',
    padding: '10px'
}

const sStyle = {
    color: 'white',
    textAlign: 'center',
    marginRight: "20vw",
    marginLeft: "20vw",
    padding: '10px'
}

const bottomStyle = {
    textAlign: 'center',
    padding: '30px'
    //textDecoration: 'underline'
}

const topStyle = {
    textAlign: 'center',
    padding: '10px'
    //textDecoration: 'underline'
}

const pStyle = {
    textAlign: 'center',
    color: '#aaa',
    fontSize: '20px',
    padding: '10px'
}

export default Services;