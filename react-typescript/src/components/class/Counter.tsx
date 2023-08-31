import React, { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};
export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.props.message}
        </button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}
