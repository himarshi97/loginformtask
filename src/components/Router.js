import React from "react";
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./Login.js";
const AppRouter = () => {
  var tokenn = localStorage.getItem("token");
  console.log("authtoken", tokenn);
  //let history = useHistory();
  //   if (tokenn !== undefined) {
  //     history.push("/");
  //   } else {
  //     history.push("/");
  //   }
  return (
    <BrowserRouter>
      <Switch>
        {/* {tokenn ? (
        <div> */}
        {/* <Redirect to={{ pathname: "/dashboard" }}> */}
        {/* <Dashboard /> */}
        {/* </Redirect> */}
        <Route path="/dashboard" component={Dashboard} />
        {/* </div>
      ) : (
        <div>
          <Redirect to={{ pathname: "/" }}>
            <Login />
          </Redirect> */}
        <Route path="/" component={Login} />
        {/* </div>
      )} */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
