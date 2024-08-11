import React from "react";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const Star = () => React.createElement("div", null, "This is a little star *");

const App = () => {
  return (
    <div className="App">
      Start here.
      <GlobalStyle />
    </div>
  );
};

export default App;
