import React, { Fragment } from 'react'
import TopHeader from '../../../components/TopHeader/TopHeader'
import Form from '../../../components/Form/Form'

export default function ApplicationForm() {
    return (
        <Fragment>
            <TopHeader name="Application Form" style={{ backgroundImage: "url('images/17.jpg')", backgroundPosition: "bottom" }} />
            <section className="decoration--type6-rotate decor-bottom">
                <Form />
            </section>
        </Fragment>
    )
}
