import React from 'react'
import TopHeader from '../../../components/TopHeader/TopHeader'
import Register from '../../../components/Register/Register'
import ScrollAnimation from 'react-animate-on-scroll';


export default function About() {
    return (
        <div>
            <TopHeader name="About" style={{ backgroundImage: "url('images/about.jpg')", backgroundPosition: "bottom" }} />
            <div className="ftco-section ftco-no-pb mb-5">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
                            style={{ backgroundImage: "url('images/banner.jpg')" }}>
                        </div>
                        <div className="col-md-6 wrap-about py-md-5">
                            <div className="heading-section p-md-5">
                                <ScrollAnimation animateIn="fadeInUp" duration="2">
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
        </div>
    )
}
