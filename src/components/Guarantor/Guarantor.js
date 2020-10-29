import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Circular } from 'styled-loaders-react'
import SweetAlert from 'sweetalert2-react'
import ScrollAnimation from 'react-animate-on-scroll'

export default function Guarantor(props) {

    const { handleChange, prevStep, loading, showAlert, handleSubmit, onConfirm } = props;

    return (
        <section className="form-section px-lg-5">
            <Container>
                {loading && (
                    <div className="preloader">
                        <Circular size="60px" color="#0f054e;" />
                    </div>
                )}
                <Breadcrumbs guarantor="active" step="5" />
                <Row className="justify-content-center mb-3">
                    <Col md={7} className="text-center heading- head">
                        <h2 className="mb-3">Guarantor</h2>
                        <p>3 guarantors are needed. At least one of your guarantors must be a Government staff i.e civil servant, owner of a Secondary School or a Chief. </p>
                    </Col>
                </Row>
                <Form onChange={(e) => handleChange(e)}>
                    <h3 className="my-4">First Guarantor</h3>
                    <Form.Row>
                        <Form.Group md={4} as={Col} controlId="formGroupName">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group md={4} as={Col} controlId="formGroupPhoneNumber">
                            <Form.Label>Phone Number: </Form.Label>
                            <Form.Control type="tel" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group md={4} as={Col} controlId="formGroupEmail">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGroupAddress">
                        <Form.Label>Address: </Form.Label>
                        <Form.Control as="textarea" rows="3" type="text" placeholder="Address" />
                    </Form.Group>

                    <h3 className="my-4">Second Guarantor</h3>
                    <Form.Row>
                        <Form.Group md={4} as={Col} controlId="formGroupName">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group md={4} as={Col} controlId="formGroupPhoneNumber">
                            <Form.Label>Phone Number: </Form.Label>
                            <Form.Control type="tel" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group md={4} as={Col} controlId="formGroupEmail">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGroupAddress">
                        <Form.Label>Address: </Form.Label>
                        <Form.Control as="textarea" rows="3" type="text" placeholder="Address" />
                    </Form.Group>

                    <h3 className="my-4">Third Guarantor</h3>
                    <Form.Row>
                        <Form.Group md={4} as={Col} controlId="formGroupName">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group md={4} as={Col} controlId="formGroupPhoneNumber">
                            <Form.Label>Phone Number: </Form.Label>
                            <Form.Control type="tel" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group md={4} as={Col} controlId="formGroupEmail">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGroupAddress">
                        <Form.Label>Address: </Form.Label>
                        <Form.Control as="textarea" rows="3" type="text" placeholder="Address" />
                    </Form.Group>
                    <Col sm={6} lg={4}>
                        <Form.Check
                            type="checkbox"
                            className="my-1 mr-sm-2"
                            id="customCheckbox"
                            label="I have agreed to abide by the rules and regulations governing my job given to me by Timuks Technologiz and I promise to be of good character and code of conduct"
                            custom
                        />
                    </Col>
                </Form>
                <Row className="pt-5">
                    <Col>
                        <ScrollAnimation animateIn="fadeInUp">
                            <Button className="btnPrev my-md-4" size="lg" variant="outline-success" onClick={() => prevStep()}>Previous</Button>
                            <Button type="submit" className="btnNext my-md-4" size="lg" variant="outline-primary" onClick={(e) => handleSubmit(e)}>Submit</Button>
                        </ScrollAnimation>
                    </Col>
                </Row>
                <SweetAlert
                    show={showAlert}
                    title="This Application is Completed!"
                    text="Your Application is under review. Please wait for further directions"
                    onConfirm={() => onConfirm()}
                />
            </Container >
        </section>
    )
}
