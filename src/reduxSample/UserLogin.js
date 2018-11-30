import React, {Component} from "react";
import {connect} from 'react-redux'
import * as actions from './store/actions'
import {withRouter} from 'react-router-dom'

const USERS = {
    'ADMIN': {
        password: '1234',
        role: 'ADMIN'
    },
    'Vatandas': {
        password: '1234',
        role: 'USER'
    }
};

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.state = {
            username: '',
            userrole: ''
        }
    }

    login() {
        const username = this.state.username;
        const password = this.state.password;

        const user = USERS[username];

        if (user && user.password === password) {
            this.props.setUser(username, user.role);
            this.props.history.push('/home');
        } else {
            alert('Hatalı kullanıcı bilgisi');
        }
    }

    render() {
        return (
            <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>
                    <label>Username: </label><br/>
                    <input type="text" value={this.state.username}
                           onChange={(e) => this.setState({username: e.target.value})}/>
                </div>
                <div>
                    <label>Password:</label><br/>
                    <input type="password" value={this.state.password}
                           onChange={(e) => this.setState({password: e.target.value})}/>
                </div>
                <br/>
                <input type="button" onClick={this.login} value="LOGIN"/>
            </form>
        );
    }
}

const mapStateToProps = (state = {}) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (username, role) => {
            dispatch(actions.setUser(username, role))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(UserLogin)
);