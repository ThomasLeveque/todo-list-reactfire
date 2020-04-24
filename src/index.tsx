import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import { MyGlobalStyle } from "./index.styles";

ReactDOM.render(
  <React.StrictMode>
    <MyGlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
