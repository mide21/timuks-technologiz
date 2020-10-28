import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function TopHeader(props) {
    return (
        <div>
            <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" style={props.style} >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-start justify-content-center">
                        <div className="col-md-9 pt-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <h1 className="mb-3 bread">{props.name}</h1>
                                <p className="breadcrumbs">
                                    <span className="mr-2">
                                        <a href="/">Home <i className="ion-ios-arrow-forward" /></a>
                                    </span>
                                    <span> {props.name}</span>
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
