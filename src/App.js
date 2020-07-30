import React from "react";
import logo from "./logo.svg";
//import { Link, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
//import Login from "./components/Login.js";
import AppRouter from "./components/Router.js";
import Example from "./components/Navbar.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducers from "./allreducers/Rootreducer";
import { ToastContainer, toast } from "react-toastify";

const store = createStore(LoginReducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <AppRouter />

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Provider>
  );
}

export default App;
