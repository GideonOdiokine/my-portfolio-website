import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./modules/Navigation/Navigation/Navigation";
import Footer from "./modules/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
