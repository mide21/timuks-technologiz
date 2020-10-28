import React, { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import SweetAlert from 'sweetalert2-react'
import { Circular } from 'styled-loaders-react'


export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAlert: false,
            loading: false
        }

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false,
                showAlert: true
            })
        }, 4000)
    }

    onConfirm = () => {
        this.setState({
            showAlert: false
        })
    }

    render() {
        const { loading } = this.state;
        return (
            <Container className="mt-5" style={{ paddingBottom: "70px" }}>
                {loading && (
                    <div className="preloader">
                        <Circular size="60px" color="#0f054e;" />
                    </div>
                )}
                <Row className="justify-content-center mb-5">
                    <Col md={7} className="text-center heading-section">
                        <ScrollAnimation animateIn="fadeInUp">
                            <span className="subheading">Register</span>
                            <h2 className="mb-3">Registration Form</h2>
                        </ScrollAnimation>
                    </Col>
                </Row>
                <Row className="register">
                    <Col md={3} className="register-left">
                        <ScrollAnimation animateIn="fadeInUp">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h4 className="text-white">Register Now!!</h4>
                            <p>You are 30 seconds away from getting a job!</p>
                        </ScrollAnimation>
                    </Col>
                    <Form onChange={this.handleChange} onSubmit={this.handleSubmit} className="col-md-9 register-right">
                        <Form.Row className="register-form">
                            <Col md={6}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name: </Form.Label>
                                    <Form.Control id="formName" type="text" name="name" placeholder="Name" required />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email: </Form.Label>
                                    <Form.Control id="formEmail" type="email" name="email" placeholder="Your Email" required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formTel">
                                    <Form.Label>Phone Number: </Form.Label>
                                    <Form.Control type="text" name="txtEmpPhone"
                                        id="formTel" placeholder="Your Phone" required />
                                </Form.Group>
                                <button type="submit" className="btnRegister">Register</button>
                                <SweetAlert
                                    show={this.state.showAlert}
                                    title="Done"
                                    text="A link will be sent to your email to continue your application"
                                    onConfirm={this.onConfirm}
                                />
                            </Col>
                        </Form.Row>
                    </Form>
                </Row>
            </Container>
        )
    }
}
