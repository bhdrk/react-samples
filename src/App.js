import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

import SampleHome from './samples/HomePage'
import SampleLoginForm from './samples/LoginForm'
import SampleTable from './samples/MyTable'
import SampleForms from './samples/Forms'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="AppWrapper">
                    <ul className="AppMenu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/samples/login-form">Login Form</Link></li>
                        <li><Link to="/samples/table">Table</Link></li>
                        <li><Link to="/samples/forms">Forms</Link></li>
                    </ul>
                    <div className="App">
                        <Switch>
                            <Route path="/" exact component={SampleHome}/>
                            <Route path="/samples/login-form" component={SampleLoginForm}/>
                            <Route path="/samples/table" component={SampleTable}/>
                            <Route path="/samples/forms" component={SampleForms}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;