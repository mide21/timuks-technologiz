import React, { Fragment } from 'react';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Footer() {
    return (
        <Fragment>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-4">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">TIMUKS <br /> Technologiz</h2>
                                <p>Far far away, behind the word mountains, far from the countries.</p>
                                <ul className="ftco-footer-social list-unstyled mt-5">
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" delay={200}>
                                            <a href="/"><span className="icon-twitter"></span></a>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" delay={400}>
                                            <a href="/"><span className="icon-facebook"></span></a>
                                        </ScrollAnimation>
                                    </li>
                                    <li>
                                        <ScrollAnimation animateIn="fadeInUp" delay={600}>
                                            <a href="/"><span className="icon-instagram"></span></a>
                                        </ScrollAnimation>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Quick Links </h2>
                                <ul className="list-unstyled q-links">
                                    <li><a href="/about"><span className="icon-long-arrow-right mr-2"></span>About Us</a></li>
                                    <li><a href="/services"><span className="icon-long-arrow-right mr-2"></span>Services</a>
                                    </li>
                                    <li><a href="/contact"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
                                    <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>Privacy Policy</a></li>
                                    <li><a href="/"><span className="icon-long-arrow-right mr-2"></span>Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Contact Info</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker" /><span className="text">NO 1. Sally Close by
                                        Lucky London Junction off Eku-Osubi Expressway, Osubi Delta State</span></li>
                                        <li><a href="/"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                                        <li><a href="/"><span className="icon icon-envelope pr-4" /><span
                                            className="text">timology@timukstechnologiz.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                Copyright &copy; 2020 Timuks
                                Technologiz. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollToTop />
        </Fragment>
    )
}
