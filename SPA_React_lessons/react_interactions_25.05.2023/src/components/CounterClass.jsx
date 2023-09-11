import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  increaseNumber = () => {
    this.setState((state) => ({
      number: state.number + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>State in Classes</h1>
        <hr />
        <h2>Class state Num : {this.state.number}</h2>
        <button onClick={this.increaseNumber}>increase</button>
      </div>
    );
  }
}
