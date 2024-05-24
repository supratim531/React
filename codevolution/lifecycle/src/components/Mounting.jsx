import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log("Child - constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Child - getDerivedStateFromProps");

    return null;
  }

  render() {
    console.log("Child - render");

    return <h3 className="text-3xl">Child</h3>;
  }

  componentDidMount() {
    console.log("Child - componentDidMount");
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      self: 1,
    };
    this.divRef = React.createRef();

    console.log("Parent - constructor");
    console.log(this.props);
    console.log(this.state);
    console.log(this.divRef);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Parent - getDerivedStateFromProps");
    console.log(props);
    console.log(state);

    return { nameDependsOnProp: props.name };
  }

  render() {
    console.log("Parent - render");
    console.log(this.props);
    console.log(this.state);
    console.log(this.divRef);

    return (
      <div ref={this.divRef}>
        <h2 className="text-4xl">Parent</h2>
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
    console.log(this.props);
    console.log(this.state);
    console.log(this.divRef);
  }
}

export default class Mounting extends React.Component {
  render() {
    return (
      <Parent name="Parent">
        <Child />
      </Parent>
    );
  }
}
