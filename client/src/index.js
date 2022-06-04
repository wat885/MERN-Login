import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Route
import { BrowserRouter } from "react-router-dom";

//Antd
// import "antd/dist/antd.css";
import 'antd/dist/antd.min.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
