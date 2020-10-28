import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Circular } from 'styled-loaders-react'
import UploadButton from 'react-upload-button-v2';



export default function Education(props) {

    const { handleChange, prevStep, nextStep, loading, selectedFileName, handleFileChange } = props;

    return (
        <section className="form-section px-lg-5">
            <Container>
                {loading && (
                    <div className="preloader">
                        <Circular size="60px" color="#0f054e;" />
                    </div>
                )}
                <Breadcrumbs education="active" step="2" />
                <Row className="justify-content-center mb-3">
                    <Col md={7} className="text-center heading-section head">
                        <h2 className="mb-3">Education</h2>
                        <p>A, B, C and E are compulsory fields, but D is optional. Add only the month and year for the duration.</p>
                    </Col>
                </Row>
                <Form onChange={(e) => handleChange(e)}>
                    <h3 className="my-4">A. FSLC</h3>
                    <Form.Row>
                        <Form.Group lg={4} as={Col} controlId="formGroupNameofSchool">
                            <Form.Label>Name of School: </Form.Label>
                            <Form.Control type="text" placeholder="Name of School" />
                        </Form.Group>
                        <Form.Group lg={3} as={Col} controlId="formGroupDuration">
                            <Form.Label>Duration: </Form.Label>
                            <Form.Control type="date" placeholder="Duration" />
                        </Form.Group>
                        <h4>To</h4>
                        <Form.Group lg={3} as={Col} controlId="formGroupDuration">
                            <Form.Label>Duration: </Form.Label>
                            <Form.Control type="date" placeholder="Duration" />
                        </Form.Group>
                    </Form.Row>

                    <h3 className="my-4">B. SSCE</h3>
                    <Form.Row>
                        <Form.Group lg={4} as={Col} controlId="formGroupNameofSchool">
                            <Form.Label>Name of School: </Form.Label>
                            <Form.Control type="text" placeholder="Name of School" />
                        </Form.Group>
                        <Form.Group lg={3} as={Col} controlId="formGroupDuration">
                            <Form.Label>Duration: </Form.Label>
                            <Form.Control type="date" placeholder="Duration" />
                        </Form.Group>
                        <h4>To</h4>
                        <Form.Group lg={3} as={Col} controlId="formGroupDuration">
                            <Form.Label>Duration: </Form.Label>
                            <Form.Control type="date" placeholder="Duration" />
                        </Form.Group>
                    </Form.Row>

                    <h3 className="my-4">C. OND/HND</h3>
                    <Form.Row>
                        <Form.Group lg={4} as={Col} controlId="formGroupNameofSchool">
                            <Form.Label>Name of School: </Form.Label>
                            <Form.Control type="text" placeholder="Name of School" />
                        </Form.Group>
                        <Form.Group lg={3} as={Col} controlId="formGroupDuration">
                            <Form.Label>Duration: </Form.Label>
                            <Form.Control type="date" placeholder="Duration" />
                        </Form.Group>
                        <h4>To</h4>
                        <Form.Group lg={3} as={Col} controlId="formGroupDuration">
                            <Form.Label>Duration: </Form.Label>
                            <Form.Control type="date" placeholder="Duration" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group lg={6} as={Col} controlId="formGroupQualification">
                            <Form.Label>Qualification Attained: </Form.Label>
                            <Form.Control type="text" placeholder="Qualification Attained" />
                        </Form.Group>
                        <Form.Group lg={6} as={Col} controlId="formGroupClassofGraduation">
                            <Form.Label>Class of Graduation: </Form.Label>
                            <Form.Control type="text" placeholder="Class of Graduation" />
                        </Form.Group>
                    </Form.Row>

                    <h3 className="my-4">D. BSC/MSC</h3>
                    <Form.Row>
                        <Form.Group lg={4} as={Col} controlId="formGroupNameofSchool">
                            <Form.Label>Name of School: </Form.Label>
                            <Form.Control type="text" placeholder="Name of School" />
                        </Form.Group>
                        <Form.Group lg={3} as={Col} controlId="formGroupDuration">
                            <Form.Label>Duration: </Form.Label>
                            <Form.Control type="date" placeholder="Duration" />
                        </Form.Group>
                        <h4>To</h4>
                        <Form.Group lg={3} as={Col} controlId="formGroupDuration">
                            <Form.Label>Duration: </Form.Label>
                            <Form.Control type="date" placeholder="Duration" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group lg={6} as={Col} controlId="formGroupQualification">
                            <Form.Label>Qualification Attained: </Form.Label>
                            <Form.Control type="text" placeholder="Qualification Attained" />
                        </Form.Group>
                        <Form.Group lg={6} as={Col} controlId="formGroupClassofGraduation">
                            <Form.Label>Class of Graduation: </Form.Label>
                            <Form.Control type="text" placeholder="Class of Graduation" />
                        </Form.Group>
                    </Form.Row>

                    <h3 className="my-4">E.</h3>
                    <Form.Row>
                        <Form.Group lg={3} as={Col}>
                            <Form.Label>Upload Your highest certificate: </Form.Label>
                            <Form.Text id="formControlUpload" muted>
                                200kb maximum
                            </Form.Text>
                            <UploadButton
                                style={{ width: '10em' }}
                                className="custom-button"
                                onChange={handleFileChange}
                            >
                                Upload
                            </UploadButton>
                            <span className="custom-text">{selectedFileName}</span>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Row className="pt-5">
                    <Col>
                        <Button className="btnPrev my-md-4" size="lg" variant="outline-success" onClick={() => prevStep()}>Previous</Button>
                        <Button className="btnNext my-md-4" size="lg" variant="outline-success" onClick={() => nextStep()}>Next</Button>
                    </Col>
                </Row>
            </Container >
        </section>
    )
}
