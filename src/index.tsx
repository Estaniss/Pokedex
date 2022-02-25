import React from "react";
import ReactDOM from "react-dom";
import { SearchScene } from "./scenes";
import { globalStyle as GlobalStyle } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <SearchScene />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
