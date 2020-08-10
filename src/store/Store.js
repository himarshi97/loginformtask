import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducers from "../allreducers/Loginreducer.js";
import Pastereducers from "../allreducers/Pastereducer.js";

const rootReducer = combineReducers({
  LoginReducers,
  Pastereducers,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
