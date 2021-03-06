import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: new Date().toLocaleString()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleString()
        })
    }

    render() {
        return (
            <div className="clock">
                <h2>{this.state.time}</h2>
            </div>
        )
    }
}


export default Clock;