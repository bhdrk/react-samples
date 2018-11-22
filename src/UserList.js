import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

export default withRouter(class UserList extends Component {

    constructor(props) {
        super(props);
        this.editUser = this.editUser.bind(this);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const vm = this;
        axios.get('http://localhost:3001/users').then(res => {
            vm.setState({users: res.data})
        })
    }

    editUser(userId) {
        this.props.history.push('/user/edit/' + userId);
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>İsim</th>
                    <th>Soyisim</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => this.editUser(user.id)}>Edit</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        );
    }
})