import React from 'react'
import {InputText} from 'primereact/inputtext';


import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'primereact/components/button/Button';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

export class ButtonDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Button</h1>
                        <p>Button is an extension to standard input element with icons and theming.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Button label="Click" />
                    <Button label="Click" icon="pi pi-check" />
                    <Button label="Click" icon="pi pi-check" iconPos="right" />
                    <Button icon="pi pi-check" />
                    <Button label="Click" disabled="disabled" />

                    <h3>Severities</h3>
                    <Button label="Primary" />
                    <Button label="Secondary" className="p-button-secondary" />
                    <Button label="Success" className="p-button-success" />
                    <Button label="Info" className="p-button-info" />
                    <Button label="Warning" className="p-button-warning" />
                    <Button label="Danger" className="p-button-danger" />

                    <h3>Raised Buttons</h3>
                    <Button label="Primary" className="p-button-raised" />
                    <Button label="Secondary" className="p-button-raised p-button-secondary" />
                    <Button label="Success" className="p-button-raised p-button-success" />
                    <Button label="Info" className="p-button-raised p-button-info" />
                    <Button label="Warning" className="p-button-raised p-button-warning" />
                    <Button label="Danger" className="p-button-raised p-button-danger" />

                    <h3>Rounded Buttons</h3>
                    <Button label="Primary" className="p-button-rounded" />
                    <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                    <Button label="Success" className="p-button-rounded p-button-success" />
                    <Button label="Info" className="p-button-rounded p-button-info" />
                    <Button label="Warning" className="p-button-rounded p-button-warning" />
                    <Button label="Danger" className="p-button-rounded p-button-danger" />
                </div>
            </div>
        )
    }
}

class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>User Registration</h1>

                <div className="content-section implementation">
                    <div className="content-section implementation">
                        <h3>Username:</h3>
                        <InputText value={this.state.username}
                                   onChange={(e) => this.setState({value1: e.target.username})}/>
                    </div>
                    <div className="content-section implementation">
                        <h3>Email:</h3>
                        <InputText value={this.state.email} onChange={(e) => this.setState({value1: e.target.email})}/>
                    </div>
                    <div className="content-section implementation">
                        <h3>Password:</h3>
                        <InputText value={this.state.password}
                                   onChange={(e) => this.setState({value1: e.target.password})}/>
                    </div>
                    <div className="content-section implementation">
                        <Button label="Click" icon="pi pi-check" iconPos="right"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default ButtonDemo;