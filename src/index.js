import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <Router basename="/bookingExpert">
      <App />
    </Router>
  </React.Suspense>
);
