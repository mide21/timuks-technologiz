import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Home(props) {

    const { gotoServiceSection } = props;

    return (
        <Fragment>
            <div className="hero-wrap hero-wrap1 ftco-bg ftco-degree-bg" style={{ backgroundImage: "url('images/bg-masthead.jpg')", backgroundAttachment: "fixed" }}>
                <div className="overlay overlay1" />
                <div className="container">
                    <div className="row no-gutters slider-text justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-6 d-flex align-items-end top">
                            <div className="text text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h1 className="mb-4">The Simplest <br />Way to Get A Job</h1>
                                    <p style={{ fontSize: "18px" }}>A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                                    <form className="search-location mt-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10 align-items-center">
                                                <Button className="btn-round" size="lg" variant="secondary" onClick={gotoServiceSection}>Learn More</Button>
                                            </div>
                                        </div>
                                    </form>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
