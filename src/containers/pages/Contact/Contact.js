import React, { Fragment } from 'react'
import TopHeader from '../../../components/TopHeader/TopHeader'

export default function Contact() {
    return (
        <Fragment>
            <TopHeader name="Contact" style={{ backgroundImage: "url('images/contact.jpg')", backgroundPosition: "50% bottom", backgroundAttachment: "fixed" }} />
            <section className="ftco-section contact-section decoration--type6-rotate">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info justify-content-center">"
                        <div className="col-md-8">
                            <div className="row mb-5">
                                <div className="col-md-4 text-center py-4">
                                    <div className="icon">
                                        <span className="icon-map-marker" />
                                    </div>
                                    <p><span>Address:</span>NO 1. Sally Close by Lucky London Junction off Eku-Osubi Expressway, Osubi Delta State</p>
                                </div>
                                <div className="col-md-4 text-center border-height py-4">
                                    <div className="icon">
                                        <span className="icon-mobile-phone" />
                                    </div>
                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                </div>
                                <div className="col-md-4 text-center py-4">
                                    <div className="icon">
                                        <span className="icon-envelope-o" />
                                    </div>
                                    <p><span>Email:</span> <a href="mailto:timology@timukstechnologiz.com">timology@timukstechnologiz.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row block-9 justify-content-center mb-5">
                        <div className="col-md-8 mb-md-5">
                            <h2 className="text-center">If you got any questions <br />please do not hesitate to send us a message</h2>
                            <form action="#" className="bg-light p-5 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea cols="30" rows="7" className="form-control" placeholder="Message" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-round py-3 px-5">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
