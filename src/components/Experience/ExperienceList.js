import React from "react"
import { Form, Col } from "react-bootstrap"


export default function ExperienceList(props) {
    return (
        props.expList.map((val, idx) => {
            let nameofOrg = `nameofOrg-${idx}`, jobtitle = `jobtitle-${idx}`, role = `role-${idx}`, duration = `duration-${idx}`
            return (
                <tr key={val.index}>
                    <td>
                        <Form.Group>
                            <Form.Control type="text" name="experience" data-id={idx} id={nameofOrg} />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control type="text" name="experience" data-id={idx} id={jobtitle} />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control type="text" name="experience" data-id={idx} id={role} />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group>
                            <Form.Control type="text" name="experience" data-id={idx} id={duration} />
                        </Form.Group>
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
