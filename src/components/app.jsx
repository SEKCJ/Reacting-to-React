import React from 'react'
import { Component } from 'react'

// let App = ({h1Element}) => {
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "this is very confusing",
            value: "what?",
            hasLoaded: false,
        };
    }

    handleChange(param) {
        this.setState({ value: param })
    }

    handleClick(e) {
        if (e) {
            this.setState({
                hasLoaded: false
            })
        } else {
            this.setState({
                hasLoaded: true
            })
        }
    }

    componentDidMount() {
        this.setState({
            hasLoaded: true
        })
    }

    render() {
        if (this.state.hasLoaded) {
            return (

                <React.Fragment>
                    <h1>
                        {this.props.h1Element}
                    </h1 >
                    <p>Sike you thought</p>
                    <h1>
                        {this.state.text}
                    </h1>
                    <input
                        placeholder={this.state.value}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                    <button
                        onClick={() => this.handleClick(this.state.hasLoaded)}
                    >Invoke</button>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment >
                    <h1>LOADING........</h1>
                    <button
                        onClick={() => this.handleClick(this.state.hasLoaded)}
                    >Invoke</button>
                </React.Fragment>
            )
        }
    }
}

export default App