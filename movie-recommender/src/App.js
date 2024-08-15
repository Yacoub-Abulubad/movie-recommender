import React from "react";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
// Styles
import { GlobalStyle } from "./GlobalStyle";

const Star = () => React.createElement("div", null, "This is a little star *");

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;
