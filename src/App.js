import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UserList from './UserList'
import UserEdit from './UserEdit'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/user/list" component={UserList}/>
                    <Route path="/user/edit/:id" component={UserEdit}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App