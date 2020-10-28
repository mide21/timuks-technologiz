import React from 'react'

export default function Breadcrumbs(props) {
    return (
        <div className="wizard-breadcrumbs">
            <div className="wrapper">
                <nav>
                    <li className={props.personal}><span>1</span>Personal Info<i className="icon-angle-right" /></li>
                    <li className={props.education}><span>2</span>Education<i className="icon-angle-right" /></li>
                    <li className={props.skill}><span>3</span>Skills & Proficiency<i className="icon-angle-right" /></li>
                    <li className={props.experience}><span>4</span>Experience<i className="icon-angle-right" /></li>
                    <li className={props.guarantor}><span>5</span>Guarantor</li>
                    <li>Step {props.step} of 5</li>
                </nav>
            </div>
        </div>
    )
}
