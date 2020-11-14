import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import {SecondLogin, SuccessSecondLogin, SuccessSecondLoginPswd} from '../layout/SecondLogin'
import pat from '../../images/americanFlag.jpg'

export default class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            showUsername: false,
            showPassword: false,
            flagError: false,
            secondLogin: false,
            secondLoginMessage: false,
            username: '',
            usernameNew: '',
            password: '',
            passwordNew: '',
            error: ''
        }
    }

    onClick = (chce) => () => {
        //chce ? this.setState({showUsername: !this.state.showUsername}) : this.setState({showPassword: !this.state.showPassword})
        if (chce){
            if (this.state.showUsername){
                this.setState({showUsername: !this.state.showUsername, flagError: false, secondLogin: false, secondLoginMessage: false, username: '', usernameNew: '', password: '', passwordNew: '', error: ''})
            }else{
                this.setState({showUsername: !this.state.showUsername})
            }
        }else{
            if (this.state.showPassword){
                this.setState({showPassword: !this.state.showPassword, flagError: false, secondLogin: false, secondLoginMessage: false, username: '', usernameNew: '', password: '', passwordNew: '', error: ''})
            }
            this.setState({showPassword: !this.state.showPassword})
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

    verifyCredentials = (e) => {
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
            this.sendToServer({'username': this.state.username, 'password': this.state.password})
        }else{
            this.setState({error: uError})
        }
    }

    changeData = (b) => (e) => {
        e.preventDefault() 
        let uError, valid = true
        if (b){
            if (!/.+[@].+/.test(this.state.username) && !/\w/.test(this.state.username)){
                uError = 'Invalid username'
                valid = false
            }
            if (!/.+[@].+/.test(this.state.usernameNew) && !/\w/.test(this.state.usernameNew)){
                uError = 'Invalid username'
                valid = false
            }
        }else{
            if (!/[A-Z]/.test(this.state.password) || /\s/.test(this.state.password) || this.state.password.length < 10){
                uError = 'Invalid password'
                valid = false
            }
            if (!/[A-Z]/.test(this.state.passwordNew) || /\s/.test(this.state.passwordNew) || this.state.passwordNew.length < 10){
                uError = 'Invalid password'
                valid = false
            }
        }
        if (this.state.flagError){
            valid = false
            uError = this.state.error
        }
        if (valid){
            if (b){
                this.sendToServerNew({'type': 'username', 'data': this.state.usernameNew, 'dataOld': this.state.username})
            }else{
                this.sendToServerNew({'type': 'password', 'data': this.state.passwordNew, 'dataOld': this.state.password})
            }
        }else{
            this.setState({error: uError})
        }
    }

    sendToServer = async (data) => {
        try{
            let response = await fetch('/login_check', {
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
                    this.setState({secondLogin: true, username: '', password: '', flagError: false, error: ''})
                }else{
                    this.setState({'error': res['Error'], flagError: true})
                }
            }
        }catch(e){
            console.log(e)
        }
    }

    sendToServerNew = async (data) => {
        try{
            let response = await fetch('/change_data', {
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
                if (res['valid']){
                    if (res['path']){
                        this.setState({secondLoginMessage: true, username: '', flagError: false, error: ''})
                        this.props.activeUser({'login': true, 'username': this.state.usernameNew})
                    }else{
                        this.setState({secondLoginMessage: true, password: '', passwordNew: '', flagError: false, error: ''})
                    }
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
            <div className="about-row">
                <div className="about-top-column">
                    <img className="imgs2" src={pat} alt="pat"/>
                </div>
                <div className="about-top-column">
                    <h1>Welcome {this.props.userName}.</h1>
                </div>
                <div className="about-top-column">
                    <h3>What would you like to do?</h3>
                </div>
                <div className="profile-column">
                    <Button variant="danger" type="submit" onClick={this.onClick(true)}>
                        Change Username
                    </Button>
                </div>
                <div className="profile-column">
                    <Button variant="danger" type="submit" onClick={this.onClick(false)}>
                        Change Password
                    </Button>
                </div>
                <Modal show={this.state.showUsername} onHide={this.onClick(true)}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.state.secondLoginMessage ? 'Success!' : (this.state.secondLogin) ? 'Change Username' : 'Please sign in again'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.secondLogin ? <SuccessSecondLogin {...this} /> : <SecondLogin {...this} />}
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.showPassword} onHide={this.onClick(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.state.secondLoginMessage ? 'Success!' : (this.state.secondLogin) ? 'Change Password' : 'Please sign in again'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.secondLogin ? <SuccessSecondLoginPswd {...this} /> : <SecondLogin {...this} />}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}