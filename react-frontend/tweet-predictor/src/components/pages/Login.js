import React, { Component } from 'react';
import { Button, Form, Col, Row} from 'react-bootstrap';

export class Login extends Component {
    
        state = {
            credentials: [
                {
                email: '',
                password: ''
                }
            ],
            emailError: '',
            passwordError: ''
        };

    onChange = (propertyName) => (e) => {
        const {credentials} = this.state;
        const userCredentials = {
            ...credentials,
            [propertyName]: e.target.value
        };
        this.setState({ credentials: userCredentials});
    }

    onClick = (e) => {
        e.preventDefault();
        var eFill = false;
        var pFill = false;
        if(this.state.credentials.email === undefined || this.state.credentials.email === ''){
            this.setState({ 
                emailError: "Email is required"
            });
            eFill = false;
        }else{
            this.setState({
                emailError: ''
            });
            eFill = true;
        }

        if(this.state.credentials.password === undefined || this.state.credentials.password === ''){
            this.setState({
                passwordError: "Password is required"
            });
            pFill = false;
        }else{
            this.setState({
                passwordError: ''
            });
            pFill = true;
        }

        if(eFill && pFill) {
            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(this.state.credentials)
            }).then(res => res.json()).then(r => {
                if(r.working){
                    this.props.login(true);
                    this.setState({credentials:[{email: '', password: ''}], emailError: '', passwordError: ''});
                    this.props.history.push("/profile")
                }else{
                    this.setState({
                        emailError: 'Email/Password is incorrect',
                        passwordError: 'Email/Password is incorrect'
                    });
                }
            });
        }
        //code review, change header (optimal way) 
    }

    render (){
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <div className="logoContainer" style={logoStyle}>
                            <img 
                                src="/images/transparent-logo-copy.png"
                                alt=""
                            />
                            <h2>Sign into tweet-predictor</h2>
                        </div>
                        <Form>
                            <Row>
                                <Col></Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter email" value={this.state.credentials.email || ''} onChange={this.onChange("email")}/>
                                        <div style={{color: 'red'}}>
                                            {this.state.emailError}
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter password" value={this.state.credentials.password || ''} onChange={this.onChange('password')}/>
                                        <div style={{color: 'red'}}>
                                            {this.state.passwordError}
                                        </div>
                                    </Form.Group>
                                    <Button variant="success" size="lg" block onClick={this.onClick}>Sign in</Button>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const logoStyle = {
    textAlign: 'center',
    padding: '10px'
}

export default Login;