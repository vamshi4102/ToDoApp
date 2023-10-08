// import { createStore } from "redux";
import { createStore, applyMiddleware } from 'redux';
import TheReducers from "./reducers";
import thunk from 'redux-thunk';
// const store = createStore(TheReducers);
const store = createStore(TheReducers, applyMiddleware(thunk))
export default store;
