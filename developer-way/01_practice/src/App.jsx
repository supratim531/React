import React, { useEffect } from "react";
import RenderProps from "./lessons/render-props";
import ElementAsProp from "./lessons/element-as-prop";
import HOC from "./lessons/hoc";

function App() {
  useEffect(() => {
    //For combine keys like Ctrl + S
    document.onkeydown = function (event) {
      if (event.keyCode === 83 && event.ctrlKey) {
        event.preventDefault();
        alert("Saving is not supported");
      }
    };
  }, []);

  return (
    <div>
      <ElementAsProp />
      <RenderProps />
      <HOC />
    </div>
  );
}

export default App;
