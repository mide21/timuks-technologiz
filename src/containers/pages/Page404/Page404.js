import React, { Component } from 'react'

export default class Page404 extends Component {
    render() {
        return (
            <div className="container" style={{ padding: "10rem" }}>
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercase">
                        <h1 className="display-4">Oops!</h1>
                        <br />
                        <h1>error 404</h1>
                        <br />
                        <h5>
                            the requested URL
                            <span className="text-danger ml-2">
                                {this.props.location.pathname}
                            </span>{" "}
                            was not found
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}
