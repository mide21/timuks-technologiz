import React, { useState } from 'react'
import Burger from './Burger'


export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 col-md-2">
                            <a className="navbar-brand" href="/">
                                <img className="site-logo" src="images/logo.jpg" alt="Timuks Technologiz" />
                            </a>
                        </div>
                    </div>
                    <Burger open={open} setOpen={setOpen} />
                </div>
            </nav>
            {/* {open && (<div className="toggler-bg" />)} */}
        </>
    )
}
