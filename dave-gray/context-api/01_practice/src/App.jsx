import React from "react";
import { DataProvider } from "./contexts/DataContext";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <div className="m-4">
          <Component1 />
          <Component2 />
        </div>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
