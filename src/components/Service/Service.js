import React from 'react'
import { service } from '../../data/data'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Services(props) {

    const { serviceSection } = props;

    return (
        <section className="ftco-section ftco-no-pb decoration--type6-rotate" ref={serviceSection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 heading-section text-center mb-5 mt-lg-2 mt-md-5" >
                        <ScrollAnimation animateIn="fadeInUp">
                            <span className="subheading">Our Services</span>
                            <h2 className="mb-2">We got what you need </h2>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row d-flex">
                    {
                        service.map(({ id, flaticon, mediaHead, mediaBody, delay }) =>
                            <div key={id} className="col-md-3 d-flex align-self-stretch">
                                <ScrollAnimation animateIn="fadeInUp" delay={delay}>
                                    <div className="media block-6 services d-block text-center">
                                        <div className="icon d-flex justify-content-center align-items-center">
                                            <span className={flaticon} />
                                        </div>
                                        <div className="media-body py-md-4">
                                            <h3>{mediaHead}</h3>
                                            <p>{mediaBody}</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
