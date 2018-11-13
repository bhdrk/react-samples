import React, {Component} from 'react';

class MyCell extends Component {
    render() {
        const value = this.props.value;
        return (
            <td style={{border: "1px solid red"}}>{value}</td>
        )
    }
}

class MyRow extends Component {
    render() {
        const value = this.props.value;
        return (
            <tr>
                {value.map((item) => <MyCell value={item}/>)}
            </tr>
        )
    }
}

class MyTable extends Component {
    render() {
        const data = this.props.data;
        return (
            <table style={{fontSize: 48}}>
                {data.map((item) => <MyRow value={item}/>)}
            </table>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MyTable data={
                        [
                            ["11", "12", "13"],
                            ["21", "22", "23"],
                            ["31", "32", "33"]
                        ]
                    }/>
                </header>
            </div>
        );
    }
}

export default App;
