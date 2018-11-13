import {Component} from "react";
import React from "react";

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.loginClick = this.loginClick.bind(this);

        this.state = {
            showLogin: true,
            showWelcome: false,
            showError: false,
            username: '',
            password: ''
        }
    }

    onUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    loginClick() {
        if (this.username === "admin" && this.password === "12345") {
            this.setState({
                showLogin: false,
                showWelcome: true,
                showError: false
            })
        } else {
            this.setState({
                showLogin: false,
                showWelcome: false,
                showError: true
            })
        }
    }

    render() {
        const showLogin = this.state.showLogin;
        const showWelcome = this.state.showWelcome;
        const showError = this.state.showError;
        return (
            <div className="App">
                <div className="loginForm" style={{display: showLogin ? 'block' : 'none'}}>
                    <div className="field">
                        <label>Username:</label>
                        <input type="text" name="myUserName" onChange={this.onUsernameChange}/>
                    </div>
                    <div className="field">
                        <label>Password:</label>
                        <input type="password" name="myPassword" onChange={this.onPasswordChange}/>
                    </div>
                    <div className="login-button">
                        <button onClick={this.loginClick}>LOGIN</button>
                    </div>
                    <div className="field">
                        {this.state.username} / {this.state.password}
                    </div>
                </div>
                <div style={{display: showWelcome ? 'block' : 'none'}}>
                    Welcome {this.username}
                </div>
                <div style={{display: showError ? 'block' : 'none'}}>
                    Username / password error
                </div>
            </div>
        );
    }
}

export default LoginForm;
