import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import "./i18n";
import Spinner from "./components/Spinner";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Suspense fallback={<Spinner withText={true} />}>
    <Router  basename="/bookingExpert">
      <App />
    </Router>
  </React.Suspense>
);
