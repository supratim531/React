import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 1,
      y: 1,
      z: 1,
      count: this.props.init,
    };
  }

  // syntax of increaseCount could be...

  // increaseCount = (e) => {...};
  // increaseCount = function (e) {...};
  increaseCount(e) {
    console.log(e);

    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log(`Updated count: ${this.state.count}`);
    // });

    this.setState(
      (prevState, props) => {
        console.log(props);
        return { count: prevState.count + 1 };
      },
      () => {
        console.log(`Updated count: ${this.state.count}`);
      },
    );
  }

  render() {
    return (
      <div className="m-4">
        <div>Count: {this.state.count}</div>
        <button
          onClick={this.increaseCount.bind(this)}
          className="rounded bg-blue-600 px-6 py-3 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
        >
          Update Count
        </button>
      </div>
    );
  }
}

export default class StateInClass extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter
          init={108}
          name="Counter1"
          aria-label="Counter1"
          data-example
        />
        <Counter
          init={4545}
          name="Counter2"
          aria-label="Counter2"
          data-example
        />
      </React.Fragment>
    );
  }
}
