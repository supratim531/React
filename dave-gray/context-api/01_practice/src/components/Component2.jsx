import React, { useContext } from "react";
import DataContext from "../contexts/DataContext";

function Component2() {
  const { test } = useContext(DataContext);

  return (
    <div>
      <h2 className="text-4xl font-medium">{test}</h2>
      <p>Component2</p>
    </div>
  );
}

export default Component2;
