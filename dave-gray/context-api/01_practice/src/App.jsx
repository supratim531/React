import React from "react";
import { DataProvider } from "./contexts/DataContext";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  return (
    <DataProvider>
      <Component1 />
      <Component2 />
    </DataProvider>
  );
}

export default App;
