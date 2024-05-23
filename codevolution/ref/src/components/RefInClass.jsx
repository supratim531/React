import React, { Component } from "react";

class RefInClass extends Component {
  constructor(props) {
    super(props);
    this.cbInputRef = null;
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
    console.log(this.cbInputRef);

    // // set focus to inputRef
    // this.inputRef.current.focus();

    // set focus to cbInputRef
    this.cbInputRef.focus();
  }

  getUsername() {
    alert(this.inputRef.current.value);
  }

  getName() {
    alert(this.cbInputRef.value);
  }

  render() {
    return (
      <form
        onSubmit={(e) => e.preventDefault()}
        className="m-4 inline-flex flex-col gap-4 rounded bg-[papayawhip] p-4 text-slate-800 shadow shadow-slate-400"
      >
        <div>
          <label htmlFor="uname">Username: </label>
          <input
            ref={this.inputRef}
            id="uname"
            type="text"
            className="rounded border border-gray-400 px-2.5 py-1.5 focus:outline-none"
          />
          <button
            tabIndex={1}
            type="button"
            onClick={this.getUsername.bind(this)}
            className="mx-2 rounded bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
          >
            Get Username
          </button>
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            ref={(element) => {
              this.cbInputRef = element;
            }}
            id="name"
            type="text"
            className="rounded border border-gray-400 px-2.5 py-1.5 focus:outline-none"
          />
          <button
            tabIndex={1}
            type="button"
            onClick={this.getName.bind(this)}
            className="mx-2 rounded bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-slate-600 transition-all hover:bg-blue-800"
          >
            Get Name
          </button>
        </div>
      </form>
    );
  }
}

export default RefInClass;
