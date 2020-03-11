import React, { Component } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
//phone number, email, address verification/correct format
export class SignUp extends Component {
    state = {
        contact: [
            {
                name: '',
                email: '',
                address: '',
                phone: ''
            }
        ],
        show: false,
        nameError: '',
        emailError: '',
        addressError: '',
        phoneError: ''
    }
    
    handleShow = () => {
        this.setState({show: !this.state.show})
    }

    onClick =  (e) => {
        e.preventDefault();
        var valid = true;

        if(this.state.contact.name === undefined || this.state.contact.name === ''){
            this.setState({
                nameError: 'Name is required'
            });
            valid = false;
        } else {
            this.setState({
                nameError: ''
            })
        }

        if(this.state.contact.email === undefined || this.state.contact.email === ''){
            this.setState({
                emailError: 'Email is required'
            });
            valid = false;
        } else {
            this.setState({
                emailError: ''
            })
        }

        if (this.state.contact.address === undefined || this.state.contact.address === ''){
            this.setState({
                addressError: 'Address is required'
            });
            valid = false;
        } else {
            this.setState({
                addressError: ''
            })
        }
        
        if (this.state.contact.phone === undefined || this.state.contact.phone === ''){
            this.setState({
                phoneError: 'Phone number is required'
            });
            valid = false;
        } else {
            this.setState({
                phoneError: ''
            })
        }
        
        if (valid) {
            this.props.signUp(this.state.contact);
            this.setState({contact: [{ name: '', email:'', address: '', phone: ''}],  show: false, nameError: '', emailError: '', addressError: '', phoneError: ''});
            this.handleShow();
        }
    }

    onChange = (propertyName) => (e) => {
        const { contact } = this.state;
        const newContact = {
            ...contact,
            [propertyName]: e.target.value
        };
        this.setState({ contact: newContact});
    }

    render () {
        return ( 
            <div>
                <Button size="lg" onClick={this.handleShow}>Sign Up</Button>
            
                <Modal show={this.state.show} onHide={this.handleShow} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Sign up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" value={this.state.contact.name || ''} onChange={this.onChange('name')} />
                                    <div style={{color: 'red'}}>
                                        {this.state.nameError}
                                    </div>
                                </Col>
                                <Col>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" value={this.state.contact.email || ''} onChange={this.onChange('email')} />
                                    <div style={{color: 'red'}}>
                                        {this.state.emailError}
                                    </div>
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter address" value={this.state.contact.address || ''} onChange={this.onChange('address')} />
                                <div style={{color: 'red'}}>
                                    {this.state.addressError}
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone number" value={this.state.contact.phone || ''} onChange={this.onChange('phone')} />
                                <div style={{color: 'red'}}>
                                    {this.state.phoneError}
                                </div>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>Close</Button>
                        <Button onClick={this.onClick}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default SignUp;
