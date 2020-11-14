import React from 'react'
import { Button, Form } from 'react-bootstrap';

export const SecondLogin = (context) =>{
    return (
        <Form className="loginForm" style={{width: '20rem'}}>
            <Form.Group controlId='username'>
                <Form.Label><b>Username or email</b></Form.Label>
                <Form.Control type="text" onChange={context.onChange('username', 40)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label><b>Password</b></Form.Label>
                <Form.Control type="password" onChange={context.onChange('password', 200)}></Form.Control>
                <Form.Text className='text-form'>{context.state.error}</Form.Text>
            </Form.Group>
            <Button variant="success" type="submit" block onClick={context.verifyCredentials}>
                Sign in
            </Button>
        </Form>
    )
}

export const SuccessSecondLogin = (context) =>{
    return (
        context.state.secondLoginMessage ? <span style={{color: 'green'}}>Username has been changed!</span> :
        <Form className="loginForm" style={{width: '20rem'}}>
            <Form.Group controlId='username'>
                <Form.Label><b>Enter old username</b></Form.Label>
                <Form.Control type="text" onChange={context.onChange('username', 40)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='username'>
                <Form.Label><b>Enter new username</b></Form.Label>
                <Form.Control type="text" onChange={context.onChange('usernameNew', 40)}></Form.Control>
                <Form.Text className='text-form'>{context.state.error}</Form.Text>
            </Form.Group>
            <Button variant="success" type="submit" block onClick={context.changeData(true)}>
                Change Username
            </Button>
        </Form>
    )
}

export const SuccessSecondLoginPswd = (context) =>{
    return (
        context.state.secondLoginMessage ? <span style={{color: 'green'}}>Password has been changed!</span> :
        <Form className="loginForm" style={{width: '20rem'}}>
            <Form.Group controlId='password'>
                <Form.Label><b>Enter old password</b></Form.Label>
                <Form.Control type="password" onChange={context.onChange('password', 200)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label><b>Enter new password</b></Form.Label>
                <Form.Control type="password" onChange={context.onChange('passwordNew', 200)}></Form.Control>
                <Form.Text className='text-form'>{context.state.error}</Form.Text>
            </Form.Group>
            <Button variant="success" type="submit" block onClick={context.changeData(false)}>
                Change Username
            </Button>
        </Form>
    )
}