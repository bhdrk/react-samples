import React, {Component} from 'react'
import UserMenu from "./UserMenu";
import {connect} from 'react-redux'

class UserHome extends Component {
    render() {
        const username = this.props.username;
        return (
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: '1'}}>
                    <UserMenu/>
                </div>
                <div style={{flexGrow: '1'}}>
                    Welcome {username}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ((state = {}) => {
    return {
        username: state.username
    }
});

export default connect(mapStateToProps)(UserHome);