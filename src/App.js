import React from "react";
import { Switch } from "react-router-dom";
import "./App.scss";
import { commonRoutes } from "./config/constants/routes";

function App() {
  let routes = commonRoutes;

  return <Switch>{routes.map((route, i) => route)}</Switch>;
}

export default App;
