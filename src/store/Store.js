import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import LoginReducers from "../allreducers/Loginreducer.js";
import Createpastereducer from "../allreducers/Createpastereducer.js";
import Viewpastereducer from "../allreducers/Viewpastereducer.js";

const rootReducer = combineReducers({
  LoginReducers,
  Createpastereducer,
  Viewpastereducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
