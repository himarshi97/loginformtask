import React from "react";
import logo from "./logo.svg";
import { Link, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.js";
import AppRouter from "./components/Router.js";
import Dashboard from "./components/Dashboard.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducers from "./allreducers/Rootreducer";
import { ToastContainer, toast } from "react-toastify";
const store = createStore(LoginReducers, applyMiddleware(thunk));

function App() {
  // var token = localStorage.getItem("token");

  // console.log("token", token);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="main">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Login} />
          </Switch>
          {/* <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          /> */}
          {/* {token ? (
            <div>
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          ) : (
            <div>
              <Redirect to="/">
                <Login />
              </Redirect>
            </div>
          )} */}
          {/* <AppRouter /> */}
          {/* <Dashboard /> */}
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
