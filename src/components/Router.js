import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./Login.js";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
