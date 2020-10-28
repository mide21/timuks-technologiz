import React, { useRef } from 'react'
import Register from '../../../components/Register/Register'
import { work } from '../../../data/data';
import Header from '../../../components/Header/Header';
import Service from '../../../components/Service/Service';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Home() {

    const serviceSection = useRef(null);

    const gotoServiceSection = () => window.scrollTo({ top: serviceSection.current.offsetTop, behavior: "smooth" })

    return (
        <div>
            <Header gotoServiceSection={gotoServiceSection} />
            <Service serviceSection={serviceSection} />
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

            <div className="ftco-section ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
                            style={{ backgroundImage: "url('images/banner.jpg')" }}>
                        </div>
                        <div className="col-md-6 wrap-about py-md-5">
                            <div className="heading-section p-md-5">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h2 className="mb-4">We Put People First.</h2>

                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                It is aparadisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                                    would have
                                    been rewritten a thousand times and everything that was left from its origin would be the
                                    word "and" and
                                    the Little Blind Text should turn around and return to its own, safe country. But nothing
                                    the copy said
                                    could convince her and so it didn’t take long until a few insidious Copy Writers ambushed
                                    her, made her
                                drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Register />
        </div >
    )
}
