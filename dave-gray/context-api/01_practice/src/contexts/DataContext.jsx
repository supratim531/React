import { createContext } from "react";

const DataContext = createContext({ x: 108 });

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ test: "Provider" }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
