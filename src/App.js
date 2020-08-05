import React from "react";
import "./App.css";
import AppRouter from "./components/Router.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/Store.js";

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
