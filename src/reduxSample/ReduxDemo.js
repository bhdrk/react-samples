import React, {Component} from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './store/reducer'
import UserLogin from './UserLogin'
import UserHome from './UserHome'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const store = createStore(reducers);

export default class AppWrapper extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ReduxDemo/>
                </BrowserRouter>
            </Provider>
        );
    }
}

class ReduxDemo extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={UserLogin}/>
                <Route path="/login" exact component={UserLogin}/>
                <Route path="/home" exact component={UserHome}/>
            </Switch>
        );
    }
}

