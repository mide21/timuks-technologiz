import React from "react"
import { InputGroup, Form } from "react-bootstrap"


export default function ExperienceList(props) {

    return (
        props.expList.map((val, idx) => {
            let nameofOrg = `nameofOrg-${idx}`, jobtitle = `jobtitle-${idx}`, role = `role-${idx}`, duration = `duration-${idx}`
            return (
                <tr key={val.index}>
                    <td>
                        <InputGroup>
                            <Form.Control type="text" name="experience" data-id={idx} id={nameofOrg} />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control type="text" name="experience" data-id={idx} id={jobtitle} />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control type="text" name="experience" data-id={idx} id={role} />
                        </InputGroup>
                    </td>
                    <td>
                        <InputGroup>
                            <Form.Control type="text" name="experience" data-id={idx} id={duration} />
                        </InputGroup>
                    </td>
                    <td style={{ paddingTop: "20px" }}>
                        {
                            idx === 0 ? <button onClick={() => props.add()} type="button" className="btn btn-add text-center"><i className="icon-plus" aria-hidden="true"></i></button>
                                : <button className="btn btn-remove" onClick={(() => props.delete(val))} ><i className="icon-minus" aria-hidden="true"></i></button>
                        }
                    </td>
                </tr >
            )
        })
    )
}
