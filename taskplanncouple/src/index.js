import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataProvider } from "./providers/DataProvider";
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      
      <div class="container">
        <h1 class="Title">Task List</h1>
      </div>
      
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
