import React from 'react'
import {Form, Button} from 'react-bootstrap'
import tl from '../../images/twitterLogo.png'

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            error: '',
            flagError: false
        }
    }

    onChange = (type, lngth) => (e) => {
        if (e.target.value.length > lngth){
            e.target.value = e.target.value.substr(0, lngth)
        }
        if (this.state.flagError){
            this.setState({[type]: e.target.value.trim(), flagError: false})
        }else{
            this.setState({[type]: e.target.value.trim()})
        }

    }

    onClick = (e) => {
        e.preventDefault() // prevents onclick from automatically sending data to server
        let uError, valid = true
        if (!/.+[@].+/.test(this.state.username) && !/\w/.test(this.state.username)){
            uError = 'Invalid username/email or password'
            valid = false
        }
        if (!/[A-Z]/.test(this.state.password) || /\s/.test(this.state.password) || this.state.password.length < 10){
            uError = 'Invalid username/email or password'
            valid = false
        }
        if (this.state.flagError){
            valid = false
            uError = this.state.error
        }
        if (valid){
            this.sendToServer(this.state)
        }else{
            this.setState({error: uError})
        }
    }

    sendToServer = async (data) => {
        try{
            let response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!response.ok){
                throw new Error(`HTTP Error! Status: ${response.status}`)
            }else{
                let res = await response.json()
                if (res['Response']){
                    this.props.activeUser({'login': true, 'username': res['username']})
                    this.props.history.push("/")
                }else{
                    this.setState({'error': res['Error'], flagError: true})
                }
            }
        }catch(e){
            console.log(e)
        }
        
    }
    render(){
        return (
            <div className="login-form-row">
                <div className="format-form">
                    <img className="imgs" src={tl} alt="tl"/>
                </div>
                <h2 className="format-form">Sign in to TweetPredictor</h2>
                <Form className="loginForm" style={{width: '20rem'}}>
                    <Form.Group controlId='username'>
                        <Form.Label><b>Username or email</b></Form.Label>
                        <Form.Control type="text" onChange={this.onChange('username', 40)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" onChange={this.onChange('password', 200)}></Form.Control>
                        <Form.Text className='text-form'>{this.state.error}</Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit" block onClick={this.onClick}>
                        Sign in
                    </Button>
                </Form>
                <p className="format-form">Not a user? <a href="/signup" style={{color: 'blue'}}>Sign up</a> today!</p>
            </div>
        )
    }
}