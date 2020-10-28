import React, { Component } from 'react'
import Personal from '../Personal/Personal'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Guarantor from '../Guarantor/Guarantor'

export default class ApplicationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            loading: false,
            showAlert: false,
            selectedFileName: "No file chosen yet",
            selectedFileNameTwo: "No file chosen yet"
        }

    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            loading: true,
        })

        setTimeout(() => {
            this.setState({
                loading: false,
                step: step + 1
            })
        }, 4000)

    }

    prevStep = () => {
        const { step } = this.state;

        this.setState({
            loading: true,
        })

        setTimeout(() => {
            this.setState({
                loading: false,
                step: step - 1
            })
        }, 2000)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFileChange = (input) => {
        let selectedFileName = input.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        this.setState({
            selectedFileName: selectedFileName,
        })
    }

    handleFileChangeTwo = (input) => {
        let selectedFileNameTwo = input.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
        this.setState({
            selectedFileNameTwo: selectedFileNameTwo,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false,
                showAlert: true
            })
        }, 4000)
    }

    onConfirm = () => {
        this.setState({
            showAlert: false
        })
    }



    render() {

        const { step, loading, showAlert, selectedFileNameTwo, selectedFileName } = this.state;

        switch (step) {
            case 1:
                return (
                    <div>
                        <Personal
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            loading={loading}
                            handleFileChangeTwo={this.handleFileChangeTwo}
                            selectedFileNameTwo={selectedFileNameTwo}
                        />
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Education
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            loading={loading}
                            handleFileChange={this.handleFileChange}
                            selectedFileName={selectedFileName}
                        />
                    </div>
                )
            case 3:
                return (
                    <div>
                        <Skills
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            loading={loading}
                        />
                    </div>
                )
            case 4:
                return (
                    <div>
                        <Experience
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            loading={loading}
                        />
                    </div>
                )
            case 5:
                return (
                    <div>
                        <Guarantor
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            onConfirm={this.onConfirm}
                            loading={loading}
                            showAlert={showAlert}
                        />
                    </div>
                )
            default:
                break;
        }
    }
}


