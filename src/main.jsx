import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDom.createRoot(document.querySelector("#root")).render(
  <App />
);
