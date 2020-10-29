import React, { Fragment } from 'react'
import TopHeader from '../../../components/TopHeader/TopHeader'
import Register from '../../../components/Register/Register'
import ScrollAnimation from 'react-animate-on-scroll';
import Service from '../../../components/Service/Service';
import { work } from '../../../data/data.json'



export default function Services() {

    return (
        <Fragment>
            <TopHeader name="Services" style={{ backgroundImage: "url('images/services.jpg')", backgroundAttachment: "fixed", backgroundPosition: "center" }} />
            <Service />
            <section className="ftco-section ftco-degree-bg services-section img mx-md-5"
                style={{ backgroundImage: "url('images/Slide.jpg')" }} >
                <div className="overlay" />
                <div className="container">
                    <ScrollAnimation animateIn="fadeInUp">
                        <div className="row justify-content-start mb-5">
                            <div className="col-md-6 text-center heading-section heading-section-white">
                                <span className="subheading">Work flow</span>
                                <h2 className="mb-3">How it works</h2>
                            </div>
                        </div>
                    </ScrollAnimation>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                {
                                    work.map(({ num, workFlow, workDetails, id, delay }) =>
                                        <div key={id} className="col-md-12 col-lg-6 d-flex align-self-stretch">
                                            <ScrollAnimation animateIn="fadeInUp" delay={delay}>
                                                <div className="media block-6 services services-2">
                                                    <div className="media-body py-md-4 text-center">
                                                        <div className="icon mb-3 d-flex align-items-center justify-content-center">
                                                            <span>{num}</span></div>
                                                        <h3>{workFlow}</h3>
                                                        <p>{workDetails}</p>
                                                    </div>
                                                </div>
                                            </ScrollAnimation>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Register />
        </Fragment>
    )
}
