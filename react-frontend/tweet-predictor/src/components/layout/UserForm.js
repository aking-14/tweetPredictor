import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';

export default class UserForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        }
    }

    onChange = (userItem, maxLen) => (e) => {
        if (e.target.value.length > maxLen){
            e.target.value = e.target.value.substr(0, maxLen)
        }
        this.setState({[userItem]: e.target.value.trim()})
    }

    onClick = (e) => {
        e.preventDefault()
        let fnameErr, lnameErr, unameErr, emailErr, pswdErr, valid = true
        if (!/\w/.test(this.state.firstName)){
            fnameErr = 'First Name is required'
            valid = false
        }
        if (!/\w/.test(this.state.lastName)){
            lnameErr = 'Last Name is required'
            valid = false
        }
        if (!/\w/.test(this.state.username)){
            unameErr = 'Username is required'
            valid = false
        }
        if (!/.+[@].+/.test(this.state.email)){
            emailErr = 'Please enter a valid email'
            valid = false
        }
        if (!/[A-Z]/.test(this.state.password) || /\s/.test(this.state.password) || this.state.password.length < 10){
            pswdErr = 'Please enter a valid password'
            valid = false
        }
        if (valid){
            this.sendToServer(this.state)
        }else{
            this.setState({firstNameError: fnameErr, lastNameError: lnameErr, usernameError: unameErr, emailError: emailErr, passwordError: pswdErr})
        }
    }

    async sendToServer(data) {
        try {
            let response = await fetch('/add_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }else{
                let res = await response.json()
                if (res['Response']){
                    this.props.activeUser({'login': true, 'userName': this.state.username})
                    //this.props.history.push("/profile")
                }else{
                    this.setState({emailError: "This email address is already associated with an account. Please enter another one."})
                }
            }
        }catch(e){
            console.log(e)
        }
    }


    render(){
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="fname">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" onChange={this.onChange('firstName', 40)} />
                        <Form.Text className="text-form">{this.state.firstNameError}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId="lname">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" onChange={this.onChange('lastName', 40)} />
                        <Form.Text className="text-form">{this.state.lastNameError}</Form.Text>
                    </Form.Group>
                </Form.Row>
                
                <Form.Row>
                    <Form.Group as={Col} controlId="uname">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" onChange={this.onChange('username', 20)} />
                        <Form.Text className="text-form">{this.state.usernameError}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onChange={this.onChange('email', 40)} />
                        <Form.Text className="text-form">{this.state.emailError}</Form.Text>
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="pswd">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={this.onChange('password', 200)} />
                    <Form.Text>Password must have at least 10 characters, including 1 capital letter and no spaces.</Form.Text>
                    <Form.Text className="text-form">{this.state.passwordError}</Form.Text>
                </Form.Group>
                <Button variant="success" type="submit" block onClick={this.onClick}>
                    Sign up for Tweet Predictor
                </Button>
            </Form>
        )
    }
}