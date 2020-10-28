import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ExperienceForm from './ExperienceForm';
import { Circular } from 'styled-loaders-react'



export default function Experience(props) {

    const { prevStep, nextStep, loading } = props;

    return (
        <section className="form-section px-lg-5">
            <Container>
                {loading && (
                    <div className="preloader">
                        <Circular size="60px" color="#0f054e;" />
                    </div>
                )}
                <Breadcrumbs experience="active" step="4" />
                <Row className="justify-content-center mb-3">
                    <Col md={7} className="text-center heading-section head">
                        <h2 className="mb-3">Experience</h2>
                        <p>Use the +icon to add as many experiences you've had</p>
                    </Col>
                </Row>
                <ExperienceForm />
                <Row className="pt-5">
                    <Col>
                        <Button className="btnPrev my-md-4" size="lg" variant="outline-success" onClick={() => prevStep()}>Previous</Button>
                        <Button className="btnNext my-md-4" size="lg" variant="outline-success" onClick={() => nextStep()}>Next</Button>
                    </Col >
                </Row >
            </Container >
        </section>
    )
}
