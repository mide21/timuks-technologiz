import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { Circular } from 'styled-loaders-react'
import UploadButton from 'react-upload-button-v2';
import ScrollAnimation from 'react-animate-on-scroll'
// import UploadButtonStyles from 'react-upload-button-v2/build/styles.css';
// or import UploadButtonStyles from 'react-upload-button-v2/component/styles.scss';


export default function Personal(props) {
    const { handleChange, handleFileChangeTwo, loading, nextStep, selectedFileNameTwo } = props;
    return (
        <section className="form-section px-lg-5">
            <Container>
                {loading && (
                    <div className="preloader">
                        <Circular size="60px" color="#0f054e;" />
                        {/* <p className="ml-md-0">Please Wait.....</p> */}
                    </div>
                )}
                <Breadcrumbs personal="active" step="1" />
                <Row className="justify-content-center mb-3">
                    <Col md={7} className="text-center heading-section head">
                        <h2 className="mb-3">Personal Info</h2>
                    </Col>
                </Row>
                <Form onChange={(e) => handleChange(e)}>
                    <Form.Row>
                        <Form.Group sm={4} as={Col} controlId="formGroupDateofBirth">
                            <Form.Label>Date of Birth: </Form.Label>
                            <Form.Control type="date" placeholder="Date of Birth" />
                        </Form.Group>
                        <Form.Group sm={4} as={Col} controlId="formGroupGender">
                            <Form.Label>Gender: </Form.Label>
                            <Form.Control as="select">
                                <option>Male</option>
                                <option>Female</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group sm={4} as={Col} controlId="formGroupMaritalStatus">
                            <Form.Label>Marital Status: </Form.Label>
                            <Form.Control as="select">
                                <option>Single</option>
                                <option>Married</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group lg={6} as={Col} controlId="formGroupPermanentAddress">
                            <Form.Label>Permanent Address: </Form.Label>
                            <Form.Control as="textarea" rows="3" type="text" placeholder="Permanent Address" />
                        </Form.Group>
                        <Form.Group lg={6} as={Col} controlId="formGroupContactAddress">
                            <Form.Label>Contact Address: </Form.Label>
                            <Form.Control as="textarea" rows="3" type="text" placeholder="Contact Address" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group md={4} as={Col} controlId="formGroupNationality">
                            <Form.Label>Nationality: </Form.Label>
                            <Form.Control type="text" placeholder="Nationality" />
                        </Form.Group>
                        <Form.Group md={4} as={Col} controlId="formGroupStateOrProvince">
                            <Form.Label>State or Province: </Form.Label>
                            <Form.Control type="text" placeholder="State or Province" />
                        </Form.Group>
                        <Form.Group md={4} as={Col} controlId="formGroupLocalGovtofResidence">
                            <Form.Label>Local Govt of Residence: </Form.Label>
                            <Form.Control type="text" placeholder="Local Govt of Residence" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group lg={2} as={Col}>
                            <Form.Label>Upload Passport: </Form.Label>
                            <UploadButton
                                style={{ width: '10em' }}
                                className="custom-button"
                                onChange={handleFileChangeTwo}
                            >
                                Upload
                            </UploadButton>
                            <span className="custom-text">{selectedFileNameTwo}</span>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Row className="pt-5">
                    <Col>
                        <ScrollAnimation animateIn="fadeInUp">
                            <Button className="btnNext my-4" size="lg" variant="outline-primary"
                                onClick={() => nextStep()}>
                                Next
                            </Button>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container >
        </section>
    )
}