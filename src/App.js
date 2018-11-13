import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props);
        this.loadUser = this.loadUser.bind(this);
    }

    loadUser() {
        axios.get('/user.json')
    }

    render() {
        return (
            <form>
                <table>
                    <tr>
                        <td>
                            <input type="text" name="username"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name="userId"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={this.loadUser}>Load User Data</button>
                        </td>
                    </tr>
                </table>
            </form>
        );
    }
}

export default App;
