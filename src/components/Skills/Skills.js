import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Circular } from 'styled-loaders-react'
import ScrollAnimation from 'react-animate-on-scroll'


export default function Skills(props) {

    const { handleChange, prevStep, nextStep, loading } = props;

    return (
        <section className="form-section px-lg-5">
            <Container>
                {loading && (
                    <div className="preloader">
                        <Circular size="60px" color="#0f054e;" />
                    </div>
                )}
                <Breadcrumbs skill="active" step="3" />
                <Row className="justify-content-center mb-3">
                    <Col md={7} className="text-center heading-section head">
                        <h2 className="mb-3">Skills & Proficiency</h2>
                        <p>Select computer areas you are good at and state your proficiency level on a scale of 1 to 10 (1 is very low while 10 is perfect) E.g CorelDraw: 7</p>
                    </Col>
                </Row>
                <Form onChange={(e) => handleChange(e)}>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline1"
                                label="Creating images and photo editing using Ms Point and Picture Manager"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel1">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline2"
                                label="Use of Word Pad and typing tutor"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel2">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline3"
                                label="Drawing Images Using Kid Pix"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel3">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline4"
                                label="Working with Microsoft Word"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel4">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline5"
                                label="Working with Microsoft PowerPoint"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel5">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline6"
                                label="Working with Microsoft Excel"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel6">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline7"
                                label="Working with Microsoft Access"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel7">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline8"
                                label="Working with Microsoft Publisher"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel8">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline9"
                                label="Windows Operating System"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel9">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline10"
                                label="Internet Web browsers, search engines, social media, file downloads and uploads and other online applications"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel10">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline11"
                                label="Graphics Design Using CorelDraw and Photoshop"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel11">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline12"
                                label="Software Installation and troubleshooting"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel12">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline13"
                                label="Hardware installation, maintenance and repairs, systems formatting and upgrade"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel13">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline14"
                                label="Introduction to Programming concept using QBasic"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel14">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline15"
                                label="Creating Database using mysql"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel15">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline16"
                                label="Web development using html 5,notepad, NetBeans and sublime text"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel16">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline17"
                                label="Web development using Wamp/Xamp, Filezilla, Javascript, PHP, webscripting and hosting"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel17">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline18"
                                label="Responsive Web development ussing cascading stylesheets(css)"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel18">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline19"
                                label="Networking concepts using packet tracer"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel19">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline20"
                                label="Pragramming using java development kit and visual studio"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel20">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline21"
                                label="Building mobile applications ising android"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel21">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline22"
                                label="Introduction to Autocad"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel22">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="myForm justify-content-center">
                        <Col md={3}>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline23"
                                label="Creating Animation Using Scratch"
                                custom
                            />
                        </Col>
                        <Form.Group as={Col} md={2} controlId="formGroupProfLevel23">
                            <Form.Label>Proficiency Level: </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Col md={3} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline24"
                                label="Are you ready to learn on the job areas you don't know?"
                                custom
                            />
                        </Col>
                        <Col md={2} className="ml-lg-3">
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline25"
                                label="Do you have a laptop?"
                                custom
                            />
                        </Col>
                    </Form.Row>
                    <Row className="pt-5">
                        <Col>
                            <ScrollAnimation animateIn="fadeInUp">
                                <Button className="btnPrev my-md-4" size="lg" variant="outline-success" onClick={() => prevStep()}>Previous</Button>
                                <Button className="btnNext my-md-4" size="lg" variant="outline-primary" onClick={() => nextStep()}>Next</Button>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                </Form>
            </Container >
        </section>
    )
}
