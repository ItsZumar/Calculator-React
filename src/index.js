import React from "react";
import ReactDOM from "react-dom";

// import App from "./App";
import Calc from "./Calc"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Calc />
  </React.StrictMode>,
  rootElement
);
