import React from "react";

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Parent constructor");
    console.log(this.props);
    console.log(this.state);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Parent getDerivedStateFromProps (mounting or updating)");
    console.log(props);
    console.log(state);

    return { nameDependsUponProp: props.name };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent shouldComponentUpdate");
    console.log(nextProps, this.props);
    console.log(nextState, this.state);

    for (let key in nextState) {
      if (nextState[key] !== this.state[key]) {
        return true;
      }
    }

    return false;
  }

  render() {
    console.log("Parent render (mounting or updating)");
    console.log(this.props);
    console.log(this.state);
    const { count } = this.state;

    return (
      <div>
        <h2>Parent</h2>
        <button
          onClick={(e) => this.setState({ count: count + 1 })}
          className="rounded bg-blue-600 px-6 py-3 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
        >
          Count: {count}
        </button>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Parent getSnapshotBeforeUpdate");
    console.log(prevProps, this.props);
    console.log(prevState, this.state);

    return {
      snapshot: {
        props: {
          old: prevProps,
          new: this.props,
        },
        state: {
          old: prevState,
          new: this.state,
        },
      },
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Parent componentDidUpdate");
    console.log(prevProps, this.props);
    console.log(prevState, this.state);
    console.log(snapshot);
  }
}

export default class Updating extends React.Component {
  render() {
    return <Parent name="Parent" />;
  }
}
