import React, { Component } from 'react';

class PeopleListComponent extends Component {
    constructor(props) {
        super(props);

        this.incrementer = this.incrementer.bind(this);
        this.wrongDecrementer = this.wrongDecrementer.bind(this);

        this.counter = 0;
        this.wrong = 0;
        this.state = {
            test: this.counter,
            test2: this.wrong
        }
    }

    componentDidMount(){
        this.incrementer();
        this.wrongDecrementer();
    }

    wrongDecrementer(){
        this.wrong--;
        this.state.test2 = this.wrong;

        setInterval(this.wrongDecrementer, 2000);
    }

    incrementer() {
        this.counter++;
        this.setState({
            test: this.counter
        })
        setInterval(this.incrementer, 5000);
    }

    render() {
        return (
            <div>
                <h2>People list component</h2>
                {this.props.name} <br />
                <p>Test variable in state object: {this.state.test} </p>
                <p>Test set state in wrong way: {this.state.test2} </p>
            </div>
        );
    }
}

export default PeopleListComponent;