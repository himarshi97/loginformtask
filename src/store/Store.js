import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import LoginReducers from "../allreducers/Loginreducer.js";
import CreatePastereducers from "../allreducers/Createpastereducer.js";
import ViewPastereducers from "../allreducers/Viewpastereducer.js";

const rootReducer = combineReducers({
  LoginReducers,
  CreatePastereducers,
  ViewPastereducers,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
