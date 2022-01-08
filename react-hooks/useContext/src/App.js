import "./App.css";
import React from "react";
import CompA from "./CompA";

export const NameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <NameContext.Provider value={{ first: "Itachi", last: "Uchiha" }}>
        <CompA />
      </NameContext.Provider>
    </div>
  );
}

export default App;
