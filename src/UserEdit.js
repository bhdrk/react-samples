import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class UserEdit extends Component {

    constructor(props) {
        super(props);
        this.onUserChange = this.onUserChange.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const vm = this;
        const userId = this.props.match.params['id'];

        axios.get('http://localhost:3001/users/' + userId).then(res => {
            vm.setState({
                user: res.data
            })
        })
    }

    onUserChange(e) {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    saveUser() {
        const userEditUrl = 'http://localhost:3001/users/' + this.state.user.id;
        const userData = this.state.user;
        const vm = this;

        axios.put(userEditUrl, userData).then(res => {
            vm.props.history.push('/user/list')
        }).catch(res => {
            console.log(res.data)
        })
    }

    render() {
        const user = this.state.user;
        return (
            <Fragment>
                <input type="text" name="firstname" value={user.firstname}
                       onChange={this.onUserChange}/><br/>

                <input type="text" name="lastname" value={user.lastname}
                       onChange={this.onUserChange}/><br/>

                <input type="text" name="email" value={user.email}
                       onChange={this.onUserChange}/><br/>

                <button onClick={this.saveUser}>SAVE</button>
            </Fragment>
        );
    }
}

export default withRouter(UserEdit)