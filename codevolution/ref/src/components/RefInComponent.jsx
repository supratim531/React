import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  focusInputField() {
    console.log(this);
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="">
        <label htmlFor={this.props.id}>{this.props.label}: </label>
        <input
          ref={this.inputRef}
          id={this.props.id}
          type="text"
          className="rounded border border-gray-400 px-2.5 py-1.5 focus:outline-none"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default class RefInComponent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  componentDidMount() {
    console.log(this);
    console.log(this.componentRef);
  }

  clickHandler = (e) => {
    console.log(e);
    this.componentRef.current.focusInputField();
  };

  render() {
    return (
      <form className="m-4 inline-flex flex-col gap-4 rounded bg-[papayawhip] p-4 text-slate-800 shadow shadow-slate-400">
        <Input
          ref={this.componentRef}
          id="uname"
          label="Username"
          placeholder="Enter Username"
        />
        <button
          tabIndex={1}
          type="button"
          onClick={this.clickHandler}
          className="mx-2 rounded bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
        >
          Click To Focus
        </button>
      </form>
    );
  }
}
