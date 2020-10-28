import React from 'react'
import TopHeader from '../../../components/TopHeader/TopHeader'
import Form from '../../../components/Form/Form'

export default function ApplicationForm() {
    return (
        <React.Fragment>
            <TopHeader name="Application Form" style={{ backgroundImage: "url('images/17.jpg')", backgroundPosition: "bottom" }} />
            <Form />
        </React.Fragment>
    )
}
