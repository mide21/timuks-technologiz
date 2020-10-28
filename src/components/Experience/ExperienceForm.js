import React from "react"
import ExperienceList from "./ExperienceList"
import { Table, Form, Col, Card } from "react-bootstrap"


class ExperienceForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expList: [{
                index: Math.random(),
                nameofOrg: "",
                jobtitle: "",
                role: "",
                duration: ""
            }],
        }

    }

    handleChange = (e) => {
        if (["nameofOrg", "jobtitle", "role", "duration"].includes(e.target.name)) {
            let expList = [...this.state.expList]
            expList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }


    addNewRow = (e) => {
        this.setState((prevState) => ({
            expList: [...prevState.expList, { index: Math.random(), nameofOrg: "", jobtitle: "", role: "", duration: "" }],
        }));
    }


    deleteRow = (record) => {
        this.setState({
            expList: this.state.expList.filter(r => r !== record)
        });
    }


    render() {

        let { expList } = this.state

        return (
            <Form onChange={this.handleChange} >
                <Form.Row style={{ marginTop: 20 }}>
                    <Col >
                        <Card>
                            <Card.Body>
                                <Table bordered responsive striped>
                                    <thead>
                                        <tr>
                                            <th>Name of Organisation</th>
                                            <th>Job Title</th>
                                            <th>Role</th>
                                            <th>Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <ExperienceList add={this.addNewRow} delete={this.deleteRow} expList={expList} />
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}
export default ExperienceForm