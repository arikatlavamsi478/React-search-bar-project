// src/App.tsx
import React from "react";
import SearchBarWithCounter from "./components/SearchBarWithCounter";
import InputComponent from "./components/InputComponent";
import Header from "./components/Header";
import CounterComponent from "./components/CounterCompoent";
//import SearchBarWithCounter from "./components/SearchBarWithCounter"; // Ensure the file exists at this path

const App: React.FC = () => {
  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>Fruit Search App 🍍</h1> */}
      {/* <SearchBarWithCounter />
      <Header></Header>

      <InputComponent></InputComponent> */}
      <h1 style={{ textAlign: "center" }}>Counter App </h1>
      <CounterComponent />
      
    </div>
  );
};

export default App;
